import {
  CountersState,
  CountersActionTypes,
  CountersAction,
} from "../../types/counters";

const initialState: CountersState = {
  counters: [],
  totalSum: 0,
};

export const countersReducer = ( state = initialState, action: CountersAction ): CountersState => {
  switch (action.type) {
    case CountersActionTypes.ADD_COUNTER:
      return {
        ...state,
        counters: [...state.counters, action.payload],
        totalSum: state.totalSum + action.payload.value,
      };
    case CountersActionTypes.DELETE_COUNTER:
      return {
        ...state,
        counters: state.counters.filter(
          (counter) => counter.id !== action.payload.id
        ),
        totalSum: state.totalSum - action.payload.value,
      };
    case CountersActionTypes.INCREASE_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload.id
            ? { ...counter, value: counter.value + 1 }
            : counter
        ),
        totalSum: state.totalSum + 1,
      };
    case CountersActionTypes.DECREASE_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) =>
          counter.id === action.payload.id
            ? { ...counter, value: counter.value - 1 }
            : counter
        ),
        totalSum: state.totalSum - 1,
      };
    default:
      return state;
  }
};

export type CounterState = ReturnType<typeof countersReducer>;
