import React, { FC } from "react";
import { useDispatch } from "react-redux";
import "./counter.css";

interface CounterProps {
  value: number;
  id: number;
}

export const Counter: FC<CounterProps> = ({ value, id }) => {
  const dispatch = useDispatch();

  const decreaseClickHandler = () => {
    dispatch({ type: "DECREASE_COUNTER", payload: { id: id, value: value } });
  };

  const increaseClickHandler = () => {
    dispatch({ type: "INCREASE_COUNTER", payload: { id: id, value: value } });
  };

  const removeCounter = () => {
    dispatch({ type: "DELETE_COUNTER", payload: { id: id, value: value } });
  };

  return (
    <div className="counter-container">
      <h1>{value}</h1>
      <div className="operations-buttons-container">
        <button className="decrease-button" onClick={decreaseClickHandler}>
          -
        </button>
        <button className="increase-button" onClick={increaseClickHandler}>
          +
        </button>
      </div>
      <button className="delete-button" onClick={removeCounter}>
        Удалить счетчик
      </button>
    </div>
  );
};
