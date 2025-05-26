import React from 'react'

//import styles from './Feedback.module.css';

const Feedback = ({ feedback, total, positive }) => {
    return (
        <div className="reset-btn">
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positive}%</p>
        </div>
    );
};

export default Feedback;

