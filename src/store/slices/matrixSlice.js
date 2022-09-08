import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matrix: null,
  matrixAverageArray: null,
  highlightedAmount: null,
  abs: null,
};

export const matrixSlice = createSlice({
  name: "matrixSlice",
  initialState,
  reducers: {
    setMatrixData(state, action) {
      state.matrix = action.payload.matrix;
      state.matrixAverageArray = action.payload.matrixAverage;
      state.highlightedAmount = action.payload.highlightedAmount;
    },
    increaseAmount(state, action) {
      state.matrix[action.payload.rowIndex][action.payload.cellIndex].amount =
        action.payload.newAmount;
      state.matrix[action.payload.rowIndex][
        state.matrix[action.payload.rowIndex].length - 1
      ].amount =
        state.matrix[action.payload.rowIndex][
          state.matrix[action.payload.rowIndex].length - 1
        ].amount + 1;

      const newMidAmount = state.matrix.reduce(
        (previousValue, currentValue, index) =>
          previousValue + currentValue[action.payload.cellIndex].amount,
        0,
      );
      state.matrixAverageArray[action.payload.cellIndex] = Math.round(
        newMidAmount / state.matrix.length,
      );
    },
    addRow(state, action) {
      state.matrix.push(action.payload);
    },
    deleteRow(state, action) {
      state.matrix.splice(action.payload, 1);

      const newMatrixAverageArray = [];

      for (let i = 0; i < state.matrix[0].length - 1; i++) {
        let sum = 0;
        for (let j = 0; j < state.matrix.length; j++) {
          sum += state.matrix[j][i].amount;
        }
        newMatrixAverageArray.push(Math.round(sum / state.matrix.length));
      }

      state.matrixAverageArray = newMatrixAverageArray;
    },
    addCellsDepositPercent(state, action) {
      const onePercent = action.payload.amount / 100;
      state.matrix[action.payload.rowIndex].map(item => {
        return (item.percent = (item.amount / onePercent).toFixed(0));
      });
    },
    deleteCellsDepositPercent(state, action) {
      state.matrix[action.payload].map(item => {
        return delete item.percent;
      });
    },
    setHighlightedCells(state, action) {
      const abs = [];

      const matrixToAbs = state.matrix.map((item, rowIndex) => {
        item.map((item, cellIndex) => {
          item.cellIndex = cellIndex;
          item.rowIndex = rowIndex;
          item.abs = Math.abs(action.payload - item.amount);
          abs.push(item);
        });
      });
      abs.sort((a, b) => a.abs - b.abs);
      state.abs = abs;
      for (let i = 0; i < +state.highlightedAmount + 1; i++) {
        state.matrix[abs[i].rowIndex][abs[i].cellIndex].highlighted = true;
      }
    },
    deleteHighlightedCells(state, action) {
      for (let i = 0; i < +state.highlightedAmount + 1; i++) {
        state.matrix[state.abs[i].rowIndex][
          state.abs[i].cellIndex
        ].highlighted = false;
      }
    },
  },
  extraReducers: {},
});

export const {
  setMatrixData,
  increaseAmount,
  addRow,
  deleteRow,
  addCellsDepositPercent,
  deleteCellsDepositPercent,
  setHighlightedCells,
  deleteHighlightedCells,
} = matrixSlice.actions;

export default matrixSlice.reducer;
