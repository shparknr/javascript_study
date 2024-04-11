// 이중 for 문

// 2단
let x = 2;
let result;

for (let y = 1; y < 10; y++) {
  result = x * y;
  console.log(result);
}

// 구구단
let resultAll;

for (let x = 2; x < 10; x++) {
  for (let y = 1; y < 10; y++) {
    resultAll = x * y;
    console.log(resultAll);
  }
}
