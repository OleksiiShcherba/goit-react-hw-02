import propTypes from "prop-types";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          onClick={() => {
            updateFeedback("reset");
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  updateFeedback: propTypes.func.isRequired,
  totalFeedback: propTypes.number.isRequired,
};

export default Options;
