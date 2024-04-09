let num = 9;
if (num % 2 == 0) {
  console.log(`${num}은(는) 짝수입니다.`);
} else {
  console.log(`${num}은(는) 홀수입니다.`);
}

// 70점 이상이면 합격, 그렇지 않으면 불합격
let score = 65;
let result = "";

if (score >= 70) {
  result = "합격";
} else {
  result = "불합격";
}
console.log(result);
