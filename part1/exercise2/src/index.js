import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

const App = (props) => {
    const [ counter, setCounter ] = useState(0)

    setTimeout(
        () => setCounter(counter + 1),
        1000
    )

    console.log("rendering...", counter)

    const name = "Jaewon"
    const age = 26

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Choi" age={26 + 1} />
            <Hello name={name} age={age} />
            <div>{counter}</div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))