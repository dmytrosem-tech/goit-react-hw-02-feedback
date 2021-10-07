import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  textObj: {
    goodContent,
    neutralContent,
    badContent,
    totalContent,
    positivePercentageContent,
  },
}) {
  return (
    <div className={styles.statistics}>
      <p className={styles.stat__text}>
        {goodContent}
        <span className={styles.stat__value}>{good}</span>
      </p>
      <p className={styles.stat__text}>
        {neutralContent}
        <span className={styles.stat__value}>{neutral}</span>
      </p>
      <p className={styles.stat__text}>
        {badContent}
        <span className={styles.stat__value}>{bad}</span>
      </p>
      <p className={styles.stat__text}>
        {totalContent}
        <span className={styles.stat__value}>{total}</span>
      </p>
      <p className={styles.stat__text}>
        {positivePercentageContent}
        <span className={styles.stat__value}>{positivePercentage}</span>
      </p>
    </div>
  );
}

Statistics.defaultProps = {
  textObj: {
    goodContent: "Good:",
    neutralContent: "Neutral:",
    badContent: "Bad:",
    totalContent: "Total:",
    positivePercentageContent: "Positive feedback:",
  },
};

Statistics.propTypes = {
  goodContent: PropTypes.number,
  neutralContent: PropTypes.number,
  badContent: PropTypes.number,
  totalContent: PropTypes.number,
  positivePercentageContent: PropTypes.string,
};
