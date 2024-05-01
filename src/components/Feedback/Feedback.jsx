import propTypes from "prop-types";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}</li>
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  feedback: propTypes.object.isRequired,
};

export default Feedback;
