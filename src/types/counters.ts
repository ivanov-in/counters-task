export interface CountersState {
  counters: any[];
  totalSum: number;
}

export enum CountersActionTypes {
  ADD_COUNTER = "ADD_COUNTER",
  DELETE_COUNTER = "DELETE_COUNTER",
  INCREASE_COUNTER = "INCREASE_COUNTER",
  DECREASE_COUNTER = "DECREASE_COUNTER",
}

interface AddCounterAction {
  type: CountersActionTypes.ADD_COUNTER,
  payload: {
    id: number,
    value: number,
  },
}

interface DeleteCounterAction {
  type: CountersActionTypes.DELETE_COUNTER,
  payload: {
    id: number,
    value: number,
  },
}

interface IncreaseCounterAction {
  type: CountersActionTypes.INCREASE_COUNTER,
  payload: {
    id: number,
    value: number,
  },
}

interface DecreaseCounterAction {
  type: CountersActionTypes.DECREASE_COUNTER,
  payload: {
    id: number,
    value: number,
  },
}

export type CountersAction = AddCounterAction | DeleteCounterAction |IncreaseCounterAction | DecreaseCounterAction;