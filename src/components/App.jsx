import { useState } from "react";
import { Notification } from "./Feedback/components/Notification"
import { Statistics } from "./Feedback/components/Statistics";
import { FeedbackOptions } from "./Feedback/components/FeedbackOptions";
import { Section } from "./Feedback/components/Section";
import css from "./Feedback/Feedback.module.css"

export function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const handleIncrement = option => {
        switch (option) {
           case 'good' :
         setGood(good + 1);
        break;
           case 'neutral' :
         setNeutral(neutral + 1);
        break;
            case 'bad' :
         setBad(bad + 1);
        break;
            default: return;
        }
    };
    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round(good / countTotalFeedback() * 100);
    };

    return (
            <Section title="Please leave feedback">
                <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleIncrement} />
                <p className={css.title}>Statistics</p>
                {countTotalFeedback() === 0 ?
                    <Notification message="There is no feedback" /> :
                    <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
                }
            </Section>
        );
    
};
