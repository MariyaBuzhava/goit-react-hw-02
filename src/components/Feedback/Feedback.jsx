import c from "./Feedback.module.css";
const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div className={c.container}>
      <h2>Statistics</h2>
      <div className={c.stats}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </div>
  );
};

export default Feedback;
