let id = 0;

export function arrayOfrandomAmount(amount, min = 100, max = 999) {
  const newRow = [];
  for (let i = 1; i <= amount; i++) {
    newRow.push({
      id: id,
      amount: Math.round(min - 0.5 + Math.random() * (max - min + 1)),
    });
    id++;
  }
  newRow.push({
    id: id,
    amount: newRow.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0,
    ),
    rowSum: true,
  });
  id++;

  return newRow;
}

export function createMatrix(rows, columns, highlightedAmount) {
  const matrixData = {};
  const newMatrix = [];
  const newMatrixAverageArray = [];

  for (let i = 1; i <= rows; i++) {
    newMatrix.push(arrayOfrandomAmount(columns));
  }

  for (let i = 0; i < newMatrix[0].length - 1; i++) {
    let sum = 0;
    for (let j = 0; j < newMatrix.length; j++) {
      sum += newMatrix[j][i].amount;
    }
    newMatrixAverageArray.push(Math.round(sum / newMatrix.length));
  }

  matrixData.matrix = newMatrix;
  matrixData.matrixAverage = newMatrixAverageArray;
  matrixData.highlightedAmount = highlightedAmount;
  return matrixData;
}
