var setZeroes = function (matrix) {
  function getZeroesIndex(arr) {
    const zeroes = [];

    arr.forEach((rows, idx1) => {
      rows.forEach((col, idx2) => {
        if (col === 0) {
          zeroes.push([idx1, idx2]);
        }
      });
    });
    return zeroes;
  }
  const zeroesIndeces = getZeroesIndex(matrix);

  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let zeroesLen = zeroesIndeces.length;
  for (let i = 0; i < zeroesLen; i++) {
    let row = zeroesIndeces[i][0];
    let col = zeroesIndeces[i][1];

    for (let j = 0; j < rowLen; j++) {
      matrix[j][col] = 0;
    }
    for (let k = 0; k < colLen; k++) {
      matrix[row][k] = 0;
    }
  }
};
setZeroes([[0, 1]]);
