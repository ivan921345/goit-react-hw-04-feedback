import { useEffect, useReducer, useRef } from 'react';
import Controls from './Controls';
import Title from './Title';
import Statistics from './Statistics';

function countReducer(state, actions) {
  switch (actions.type) {
    case 'good':
      return {
        ...state,
        goodFeedback: state.goodFeedback + actions.payload,
      };
    case 'bad':
      return {
        ...state,
        badFeedback: state.badFeedback + actions.payload,
      };
    case 'neutral':
      return {
        ...state,
        neutralFeedback: state.neutralFeedback + actions.payload,
      };
    default:
      console.log('None of values is used');
      return state;
  }
}

export const App = () => {
  const [statistics, dispatch] = useReducer(countReducer, {
    badFeedback: 0,
    goodFeedback: 0,
    neutralFeedback: 0,
  });

  const notFirstRender = useRef(false);

  useEffect(() => {
    if (!notFirstRender.current) {
      console.log('It is a first render');
      notFirstRender.current = true;
      return;
    }
    console.log('Its not first render');
  });

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Title />
      <Controls dispatch={dispatch} />
      {notFirstRender.current && <Statistics statistics={statistics} />}
    </div>
  );
};
