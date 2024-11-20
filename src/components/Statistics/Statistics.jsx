const Statistics = ({
  statistics: { badFeedback, goodFeedback, neutralFeedback },
}) => {
  let total = goodFeedback + neutralFeedback + badFeedback;
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {goodFeedback}</p>
      <p>Neutral: {neutralFeedback}</p>
      <p>Bad: {badFeedback}</p>
      <p>Total: {total}</p>
      <p>
        Positive feedback percentage:{' '}
        {goodFeedback && Math.round((goodFeedback / total) * 100)}%
      </p>
    </div>
  );
};

export default Statistics;
