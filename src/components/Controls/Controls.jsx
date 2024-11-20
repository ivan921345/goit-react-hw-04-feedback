const Controls = ({ dispatch }) => {
  return (
    <div className="controlsContainer">
      <button
        type="button"
        onClick={() => dispatch({ type: 'good', payload: 1 })}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'neutral', payload: 1 })}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'bad', payload: 1 })}
      >
        Bad
      </button>
    </div>
  );
};

export default Controls;
