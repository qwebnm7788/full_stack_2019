import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Country = ({ country }) => {
    return (
        <div>
            <p>{country.name}</p>
        </div>
    )
}

const CountryDetail = ({ country }) => {
    const rows = () => country.languages.map(language => <li>{language.name}</li>);
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital {country.capital}</p>
            <p>Population {country.population}</p>
            <h3>Languages</h3>
            <ul>{rows()}</ul>
            <img src={country.flag} />
        </div>
    )
}

const Result = ( props ) => {
    const filteredCountries = props.countries.filter(country => {
        return country['name'].startsWith(props.keyword);
    });
    const [selected, setSelected] = useState(null);

    if (filteredCountries.length === 1) {
        return (
            <div>
                <CountryDetail country={filteredCountries[0]} />
            </div>
        )
    } else if (selected != null) {
        return (
            <div>
                <CountryDetail country={selected} />
            </div>
        )
    } else if (filteredCountries.length < 10) {
        const rows = () => filteredCountries.map(country => {
            return (
                <div>
                    <Country country={country} /><button onClick={() => setSelected(country)}>show</button>
                </div>
            )
        });
        return (
            <div>
                {rows()}
            </div>
        )
    } else {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }
}

const App = () => {
    const [ keyword, setKeyword ] = useState('');
    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        console.log('effect');
        axios.get('https://restcountries.eu/rest/v2/all')
             .then(response => {
                console.log('promise fulfilled');
                console.log(response.data);
                setCountries(response.data);
             });
    }, []);
    
    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    }
    
    return (
        <div>
            <h2>find countries</h2>
            <input value={keyword} onChange={handleKeywordChange} />
            <Result countries={countries} keyword={keyword} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
