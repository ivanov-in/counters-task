import { TypedUseSelectorHook, useSelector } from "react-redux";
import { CounterState } from "../../store/reducers/countersReducer";

export const useTypedSelector: TypedUseSelectorHook<CounterState> = useSelector;
