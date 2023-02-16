// Задание 1
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// Задание 3
function worker(...arr) {
  return getArrayParams(arr).max - getArrayParams(arr).min;
}

function makeWork (arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arrSum = func(arrOfArr[i]);
    if (arrSum > max) {
      max = arrSum;
    }
  }
  return max;
}

console.log(getArrayParams([100, -100, 50]));
console.log(getArrayParams([10, 20, 30]));
console.log(getArrayParams([1, -4, 7]));

console.log(makeWork([[10,10,20],[20,19,10]],worker));
console.log(makeWork([[12,23,31],[41,5,61]],worker));
console.log(makeWork([[14,21,36],[15,26,39]],worker));