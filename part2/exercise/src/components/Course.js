import React from 'react'

const Header = ({ courseName }) => {
    return (
        <div>
            <h1>{courseName}</h1>
        </div>
    )
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Content = ({ parts }) => {
    const rows = () => parts.map(part => <Part part={part} key={part.id} />)
    return (
        <div>
            {rows()}
        </div>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce( (accum, part) => {
        var newPart = accum
        newPart.exercises += part.exercises
        return newPart
    })
    return (
        <p>Number of exercises {total.exercises}</p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course;