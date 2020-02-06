import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            greeting app created by
            <a href="https://github.com/qwebnm7788"> qwebnm7788</a>
        </div>
    )
}

const App = () => {
    const name = 'Jaewon'
    const age = 27

    return (
        <div>
            <p>Greeting</p>
            <Hello name={name} age={age} />
            <Footer />
        </div>    
    )
}

ReactDOM.render(<App />, document.getElementById('root'))