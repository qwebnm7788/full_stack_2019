import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({ onClick, text }) => {
    <button onClick={onClick}>
        {text}
    </button>
}

const App = (props) => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setClicks({ ...clicks, left: clicks.left + 1})
        setAll(allClicks.concat('L'))
    }

    const handleRightClick = () => {
        setClicks({ ...clicks, right: clicks.right + 1})
        setAll(allClicks.concat('R'))
    }

    return (
        <div>
            <div>
                {clicks.left}
                <Button onClick={handleLeftClick} text='left' />
                <Button onClick={handleRightClick} text='right' />
                {clicks.right}
                <History allClicks={allClicks} />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
