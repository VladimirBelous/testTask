import React from "react";
import { useDispatch } from "react-redux";

import Cell from "../Cell/Cell";

import { deleteRow } from "../../store/slices/matrixSlice";

import styles from "./Row.module.scss";

const Row = React.memo(({ cellsData, rowIndex }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.row}>
      <button
        className={styles.deleteCell}
        onClick={() => dispatch(deleteRow(rowIndex))}
      >
        x
      </button>
      {cellsData.map((item, index) => {
        return (
          <Cell
            amount={item.amount}
            cellPercent={item.percent}
            cellHighlighted={item.highlighted}
            rowIndex={rowIndex}
            cellIndex={index}
            rowSum={item.rowSum}
            key={item.id}
          />
        );
      })}
    </div>
  );
});

Row.displayName = "Row";

export default Row;
