import { useReducer } from 'react';

import { Button } from '@chakra-ui/react';

interface IState {
  count: number;
}

interface IUpdateAction {
  type: 'increment' | 'decrement';
  payload: number;
}

interface IResetAction {
  type: 'reset';
}

type CounterState = IState;
type CounterAction = IUpdateAction | IResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + action.payload,
      };
    case 'decrement':
      return {
        count: state.count - action.payload,
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <Button
        colorScheme={'green'}
        marginBottom={'1rem'}
        onClick={() => dispatch({ type: 'increment', payload: 10 })}
      >
        Increment 10
      </Button>
      <Button
        colorScheme={'red'}
        marginBottom={'1rem'}
        onClick={() => dispatch({ type: 'decrement', payload: 10 })}
      >
        Decrement 10
      </Button>
      <Button onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
    </>
  );
};
