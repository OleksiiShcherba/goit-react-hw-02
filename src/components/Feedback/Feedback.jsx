import propTypes from "prop-types";
import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div>
      <ul className={css.feedbackList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  feedback: propTypes.object.isRequired,
  totalFeedback: propTypes.number.isRequired,
  positiveFeedback: propTypes.number.isRequired,
};

export default Feedback;
