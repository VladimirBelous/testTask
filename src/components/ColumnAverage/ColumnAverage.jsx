import React from "react";

import styles from "./ColumnAverage.module.scss";

const ColumnAverage = React.memo(({ data }) => {
  return (
    <div className={styles.row}>
      <div className={styles.cell} />
      {data.map((item, index) => {
        return (
          <div className={styles.cell} key={index}>
            {item}
          </div>
        );
      })}
      <div className={styles.cell} />
    </div>
  );
});

ColumnAverage.displayName = "ColumnAverage";

export default ColumnAverage;
