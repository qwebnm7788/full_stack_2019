import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Filter = ({ keyword, keywordListener }) => {
    return (
        <form>
            <div>
                filter shown with <input value={keyword} onChange={keywordListener} />
            </div>
        </form>
    )
}

const PersonForm = ( props ) => {
    return (
        <form onSubmit={props.submitListener}>
            <div>
                name: <input value={props.name} onChange={props.nameListener} />
            </div>
            <div>
                number: <input value={props.number} onChange={props.numberListener} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

const Persons = ( props ) => {
    const filteredPersons = props.persons.filter(person => person.name.startsWith(props.keyword));
    const phonebook = () => filteredPersons.map(person => {
        return (
            <div>
                <p>{person.name} {person.number}</p>
            </div>
        )
    });

    return (
        <div>
            {phonebook()}
        </div>
    )
}

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ keyword, setKeyword ] = useState('')

    const addPerson = (event) => {
        event.preventDefault();
        const person = {
            name: newName,
            number: newNumber
        }

        var duplicate = false;
        for (var i = 0; i < persons.length; i++) {
            if (persons[i].name === person.name) {
                duplicate = true;
                break;
            }
        }

        if (duplicate) {
            alert(`${person.name} is already added to phonebook`)
        } else {
            setPersons(persons.concat(person))    
        }
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter keyword={keyword} keywordListener={handleKeywordChange} />
            <h3>Add a New</h3>
            <PersonForm 
                submitListener={addPerson}
                name={newName}
                nameListener={handleNameChange}
                number={newNumber}
                numberListener={handleNumberChange} />
            <h3>Numbers</h3>
            <Persons persons={persons} keyword={keyword} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
