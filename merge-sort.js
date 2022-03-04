// O(log n)
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIndex);
  const right = arr.slice(midIndex, arr.length);

  return merge(mergeSort(left), mergeSort(right)); // O(n)
}

// left e right devem estar ordenados
function merge(leftArr, rightArr) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }

  return result
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}

const limit = 100000;
const arr = [];
for (let i = 1; i <= limit; i++) {
  arr.push(Math.floor(Math.random() * limit));
}

const aux = arr;

console.time("sort");
arr.sort((a, b) => a - b);
console.timeEnd("sort");

console.time("mergeSort");
mergeSort(aux);
console.timeEnd("mergeSort");
