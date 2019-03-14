import { CounterActions, CounterActionTypes } from './counter.actions';

export interface State {
  value: number
}

export const initialState: State = {
  value: 0
}

export function reducer(state = initialState, action: CounterActions): State {
  switch (action.type) {

    case CounterActionTypes.LoadCounters:
      return state;

    case CounterActionTypes.Increment:
      return { ...state, value: state.value + 1 }

    case CounterActionTypes.Decrement:
      return { ...state, value: state.value - 1 }

    default:
      return state;
  }
}
