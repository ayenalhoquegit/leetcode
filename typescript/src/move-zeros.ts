const numsArray = [0, 0, 1];
let nonZeroIndex = 0;
for (let i = 0; i < numsArray.length; i++) {
  if (numsArray[i] !== 0) {
    numsArray[nonZeroIndex++] = numsArray[i];
  }
}
for (let i = nonZeroIndex; i < numsArray.length; i++) {
  numsArray[i] = 0;
}
console.log(nonZeroIndex);
console.log(numsArray);
