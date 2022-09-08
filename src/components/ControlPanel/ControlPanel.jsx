import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { arrayOfrandomAmount, createMatrix } from "../../helpers/helpers";
import { addRow, setMatrixData } from "../../store/slices/matrixSlice";

import styles from "./ControlPanel.module.scss";

const ControlPanel = () => {
  const dispatch = useDispatch();

  const [mRows, setMRows] = useState(5);
  const [nColumns, setNColumns] = useState(5);
  const [xAmount, setXAmount] = useState(5);

  const changeMValue = e => setMRows(e.target.value);
  const changeNValue = e => setNColumns(e.target.value);
  const changeXValue = e => setXAmount(e.target.value);

  const createTable = () => {
    dispatch(setMatrixData(createMatrix(mRows, nColumns, xAmount)));
  };

  const addRowToMatrix = () => {
    dispatch(addRow(arrayOfrandomAmount(mRows)));
  };

  return (
    <div className={styles.form}>
      <div className={styles.inputContainer}>
        <span className={styles.inputLabel}>M:</span>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter M value(from 0 to 100)"
          value={mRows}
          onChange={changeMValue}
        />
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.inputLabel}>N:</span>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter N value(from 0 to 100)"
          value={nColumns}
          onChange={changeNValue}
        />
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.inputLabel}>X:</span>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter X value(from 0 to 100)"
          value={xAmount}
          onChange={changeXValue}
        />
      </div>
      <button className={styles.button} onClick={createTable}>
        Apply
      </button>
      <button className={styles.button} onClick={addRowToMatrix}>
        Add row
      </button>
    </div>
  );
};

export default ControlPanel;
