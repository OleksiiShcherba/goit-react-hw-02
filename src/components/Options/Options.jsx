import propTypes from "prop-types";
import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <ul className={css.optionsList}>
      <li>
        <button
          onClick={() => {
            updateFeedback("good");
          }}
        >
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            updateFeedback("neutral");
          }}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            updateFeedback("bad");
          }}
        >
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button
            onClick={() => {
              updateFeedback("reset");
            }}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

Options.propTypes = {
  updateFeedback: propTypes.func.isRequired,
  totalFeedback: propTypes.number.isRequired,
};

export default Options;
