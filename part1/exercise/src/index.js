import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercise}
        </p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} exercise={props.exercise1} />
            <Part part={props.part2} exercise={props.exercise2} />
            <Part part={props.part3} exercise={props.exercise3} />
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.total}</p>
    )
}

const App = () => {
    const course = "Half Stack application development"
    const part1 = "Fundamentals of React"
    const part2 = "Using props to pass data"
    const part3 = "State of a component"
    const exercise1 = 10
    const exercise2 = 7
    const exercise3 = 14
    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
            <Total total={exercise1 + exercise2 + exercise3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))