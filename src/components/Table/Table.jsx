import React from "react";
import { useSelector } from "react-redux";

import Row from "../Row/Row";
import ColumnAverage from "../ColumnAverage/ColumnAverage";

import styles from "./Table.module.scss";

const Table = () => {
  const matrix = useSelector(state => state.matrixSlice.matrix);
  const matrixAverage = useSelector(
    state => state.matrixSlice.matrixAverageArray,
  );

  return (
    <div className={styles.table}>
      {matrix && (
        <>
          {matrix.map((item, rowIndex) => {
            return <Row cellsData={item} rowIndex={rowIndex} key={rowIndex} />;
          })}
          <ColumnAverage data={matrixAverage} />
        </>
      )}
    </div>
  );
};

export default Table;
