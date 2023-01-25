import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./autoIncreasingCounter.css";

interface AutoIncreasingCounterProps {
  value: number;
  id: number;
}

export const AutoIncreasingCounter: FC<AutoIncreasingCounterProps> = ({ value, id }) => {
  const [stateValue, setStateValue] = useState<number>(value);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setStateValue((prevValue) => prevValue + 1);
      dispatch({ type: "INCREASE_COUNTER", payload: { id: id, value: value } });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const removeCounter = () => {
    dispatch({ type: "DELETE_COUNTER", payload: { id: id, value: value } });
  };

  return (
    <div className="auto-counter-container">
      <h1>{stateValue}</h1>
      <button className="delete-button" onClick={removeCounter}>
        Удалить счетчик
      </button>
    </div>
  );
};
