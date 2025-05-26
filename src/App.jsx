import { useState, useEffect } from 'react'
import Feedback from "./Components/Feedback"
import Options from './Components/Options'
import Notification from './Components/Notification'


const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const saved = localStorage.getItem('feedback');
        return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = (type) => {
        setFeedback(prev => ({
            ...prev,
            [type]: prev[type] + 1,
        }));
    };

    const resetFeedback = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    };

    const total = feedback.good + feedback.neutral + feedback.bad;
    const positivePercentage = total ? Math.round((feedback.good / total) * 100) : 0;

    return (
        <div className="container">
            <h1>Sip Happens Café</h1>
            <p>Please leave your feedback about our service by selecting one of the options below.</p>
            <Options
                onLeaveFeedback={updateFeedback}
                total={total}
                onReset={resetFeedback}
            />
            {total > 0 ? (
                <Feedback feedback={feedback} total={total} positive={positivePercentage} />
            ) : (
                <Notification message="No feedback yet" />
            )}
        </div>
    );
};

export default App;
