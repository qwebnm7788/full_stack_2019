import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Result = ( props ) => {
    const filteredCountries = props.countries.filter(country => country['name'].startsWith(props.keyword));
    if (filteredCountries.length === 1 ) {
        return (
            <div>
                
            </div>
        )
    } else if (filteredCountries.length < 10) {
        for (var i = 0; i < filteredCountries.length; i++) {
        }
    } else {

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
