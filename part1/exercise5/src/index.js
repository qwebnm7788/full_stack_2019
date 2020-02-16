import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({text}) => {
    return (
        <div>
            <h2>{text}</h2>
        </div>
    )
}

const Button = ({text, handleClick}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const Anecdote = ({anecdote, votes}) => {
    return (
        <div>
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const initialVotes = new Array(anecdotes.length).join('0').split('').map(parseFloat)
    const [votes, setVotes] = useState(initialVotes)

    const nextAnecdotes = () => {
        var nextIdx = Math.floor(Math.random() * anecdotes.length);
        setSelected(nextIdx);
    }

    const voteForAnecdote = () => {
        const copy = [...votes];
        copy[selected] += 1;
        setVotes(copy);
    }

    const mostVote = Math.max(...votes);
    const mostVotedAnecdote = anecdotes[votes.indexOf(mostVote)]

    return (
        <div>
            <Header text={"Anecdote of the day"} />
            <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
            <Button handleClick={voteForAnecdote} text={"vote"} />
            <Button handleClick={nextAnecdotes} text={"next anecdote"} />
            <Header text={"Anecdote with most votes"} />
            <Anecdote anecdote={mostVotedAnecdote} votes={mostVote} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));
