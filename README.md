# 3. 데이터형(Data Type)

- number : 숫자
- string : 문자
- boolean : true / false
- null
- undefined
- Bigint
- object
- symbol

## 3.1. 숫자 number

```js
const a = 3; // 정수(integer)
const b = 5.7; // 부동 소수점 숫자 (floating point number)
const c = 123e3; // 123000
const d = 123e-3; // 0.123

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

## 3.2. Bigint

- 정수는 15개의 숫자, 15자리 정수까지 나타낼 수 있다.
- 그 이상의 정수를 사용하려면 Bigint 형 사용.

```js
const e = 9999999999999998765n; // n 사용
console.log(e);
```

## 3.3. 문자열 string

```js
const text1 = "사 과"; // 큰 따옴표 사용
console.log("text1에 저장된 내용:", text1);

// 문자열의 Length 프로퍼티 사용, 공백도 포함
console.log("text1d의 문자열 길이는" + " " + text1.length + "입니다.");

// 템플릿 문자열 ``
let username = "홍길동";
let age = 30;

let text2 = "이름:" + username + "나이:" + age;
console.log(text2);

let text3 = `이름: ${username}, 나이: ${age}`;
console.log(text3);
```

## 3.4. boolean

```js
let x = 5 > 3; // true
let y = 5 < 3; // false

console.log(x, y);
```

## 3.5. undefined, null

- undefiend

```js
let x;
console.log(x);
```

- null(빈 문자열)

```js
let y = "";
console.log(y);
```

## 3.6. object (객체)

```js
const member = {
  id: "kdhong",
  name: "홍길동",
  age: 20,
};

console.log(member.id);
console.log(member.name);
console.log(member.age);
```

## 3.7. symbol 심볼

- number, string, boolean과 같은 원시데이터
- 유일한 식별자로서 객체의 속성을 추가하는데 사용

```js
const member = {
  //"키" : "값"
  name: "홍길동",
  age: 30,
};

// Symbol()로 심볼 id 생성
let id = Symbol("id");
// 객체 member의 키 id에 문자열 "kdgong" 저장
// 심볼 id가 객체의 키로 사용되면 심볼 데이터형은
// 유일한 식별자이기 때문에 객체의 키 이름이 겹쳐서 충돌하는 경우 방지
member[id] = "kdhong";

// 객체 member에서 심볼 id가 키로 사용된 요소는
// member[id]에 의해 접근할 수 있다.
// 심볼 id와 새롭게 생성된 Symbol("id")는 서로 다르다.

console.log(id === Symbol("id"));
```

## 3.8. 배열 array

- index는 0부터 시작

```js
const car = ["현대", "기아", "벤츠", "BMW"];
console.log(car[0]);
```
