import React from 'react'
import Course from './Course'

const Courses = ({ courses }) => {
    const rows = () => courses.map(course => {
        return (
            <Course course={course} />
        )
    })

    return (
        <div>
            {rows()}
        </div>
    )
}

export default Courses