import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  increaseAmount,
  addCellsDepositPercent,
  deleteCellsDepositPercent,
  setHighlightedCells,
  deleteHighlightedCells,
} from "../../store/slices/matrixSlice";

import styles from "./Cell.module.scss";

const Cell = React.memo(
  ({ amount, cellPercent, cellHighlighted, rowIndex, cellIndex, rowSum }) => {
    const dispatch = useDispatch();

    const [cellHover, setCellHover] = useState(false);

    if (rowSum === true) {
      return (
        <button
          className={`${styles.rowSum} ${styles.cell}`}
          onMouseEnter={() => {
            dispatch(
              addCellsDepositPercent({ rowIndex: rowIndex, amount: amount }),
            );
            setCellHover(true);
          }}
          onMouseLeave={() => {
            dispatch(deleteCellsDepositPercent(rowIndex));
            setCellHover(false);
          }}
        >
          {cellPercent ? `${cellPercent}%` : amount}
        </button>
      );
    } else {
      return (
        <button
          className={styles.cell}
          onClick={() =>
            dispatch(
              increaseAmount({
                rowIndex: rowIndex,
                cellIndex: cellIndex,
                newAmount: amount + 1,
              }),
            )
          }
          onMouseEnter={() => {
            dispatch(setHighlightedCells(amount));
            setCellHover(true);
          }}
          onMouseLeave={() => {
            dispatch(deleteHighlightedCells());
            setCellHover(false);
          }}
          style={{ background: cellHighlighted && "aqua" }}
        >
          {cellPercent ? `${cellPercent}%` : amount}
          {cellPercent && (
            <div
              className={styles.cellPercent}
              style={{ height: `${cellPercent}%` }}
            />
          )}
        </button>
      );
    }
  },
);

Cell.displayName = "Cell";

export default Cell;
