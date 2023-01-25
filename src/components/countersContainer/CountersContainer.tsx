import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Counter } from "../counter/Counter";
import { AutoIncreasingCounter } from "../AutoIncreasingCounter/AutoIncreasingCounter";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./countersContainer.css";

export const CountersContainer: FC = () => {
  const dispatch = useDispatch();
  const countersState = useTypedSelector((state) => state);

  const addCounter = () => {
    const newCounter = {
      id: Date.now(),
      value: countersState.totalSum,
      isAutoIncreased: (countersState.counters.length + 1) % 4 === 0,
    };

    dispatch({ type: "ADD_COUNTER", payload: newCounter });
  };

  return (
    <div className="layout-container">
      <div className="counters-container">
        {countersState.counters.length === 0 && (
          <div className="warning">Нет активных счетчиков</div>
        )}

        {countersState.counters.map((counter) =>
          counter.isAutoIncreased ? (
            <AutoIncreasingCounter
              key={counter.id}
              value={counter.value}
              id={counter.id}
            />
          ) : (
            <Counter key={counter.id} value={counter.value} id={counter.id} />
          )
        )}
      </div>

      <button className="add-button" onClick={addCounter}>
        Добавить счетчик
      </button>
    </div>
  );
};
