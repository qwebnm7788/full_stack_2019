import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({callback, text}) => {
    return (
        <button onClick={callback}>{text}</button>
    )
}

const Statistic = ({text, value}) => {
    return (
        <tr><td>{text} {value}</td></tr>
    )
}

const Statistics = ({good, neutral, bad, feedback}) => {

    if (feedback) {
        return (
            <div>
                <h2>statistics</h2>
                <table>
                    <tbody>
                        <Statistic text={"good"} value={good} />
                        <Statistic text={"neutral"} value={neutral} />
                        <Statistic text={"bad"} value={bad} />
                        <Statistic text={"all"} value={good + neutral + bad} />
                        <Statistic text={"average"} value={(good - bad) / (good + neutral + bad)} />
                        <Statistic text={"positive"} value={`${(good) / (good + neutral + bad) * 100 }%`} />
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [feedback, setFeedback] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1);
        setFeedback(1);
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
        setFeedback(1);
    }

    const handleBadClick = () => {
        setBad(bad + 1);
        setFeedback(1);
    }

    return (
        <div>
            <h2>give feedback</h2>
            <Button callback={handleGoodClick} text={"good"} />
            <Button callback={handleNeutralClick} text={"neutral"} />
            <Button callback={handleBadClick} text={"bad"} />
            <Statistics good={good} neutral={neutral} bad={bad} feedback={feedback}></Statistics>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
