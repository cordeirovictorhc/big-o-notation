// array deve estar ordenado, crescente ou descrescente

// O(log n)

const arr = [];
const start = 0;
const target = 10000;

for (let i = 1; i <= 1024; i++) {
  arr.push(i);
}

const end = arr.length - 1;

// retorna true se valor existe no array
function binarySearch(arr, start, end, target) {
  console.log(arr.slice(start, end));

  if (start > end) return false;

  const midIndex = Math.floor((start + end) / 2);

  if (arr[midIndex] === target) return true;

  if (arr[midIndex] > target) {
    // target no lado esquerdo do array
    return binarySearch(arr, start, midIndex - 1, target);
  } else {
    // target no lado direito do array
    return binarySearch(arr, midIndex + 1, end, target);
  }
}

console.log(binarySearch(arr, start, end, target));
