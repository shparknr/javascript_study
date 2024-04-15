const numbers = [1, 2, 3, 4, 5];

// map()메서드는 forEach()메서드와 달리 매개변수로 사용되는 함수에서
// 값을 반환하는 return이 존재
// map()메서드는 원본의 배열을 그대로 두고 새로운 배열을 생성
// map()메서드는 매개변수로 설정도니 익명함수를 실행하여
// 얻어진 요소로 구성된 새로운 배열을 반환
let arr = numbers.map((num) => num * num);
console.log(arr);
// let arr = numbers.map(function (num) {
//   return num * num;
// });

document.getElementById("show").innerHTML = arr;
