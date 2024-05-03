# 15. 이벤트

- 웹 페이지에서 발생하는 사건을 의미한다.
- 이벤트를 처리하는 함수를 event handeler 또는 event listener라고 한다

## 15.1. 이벤트 핸들러

- 마우스 클릭이나 이동
- 페이지 로드
- 이미지 로드
- 입력창에 데이터 입력
- 키보드 누르기 등

```html
<body>
  <button onclick="change(this)">클릭하세요!</button>

  <script src="js/event.js"></script>
</body>
```

```js
function change(elem) {
  elem.innerHTML = "OK!";
}
```

### 15.1.1. 인라인 모델

```html
<body>
  <button onclick="document.getElementById('show').innerHTML = Date()">
    현재 시간은?
  </button>

  <p id="show"></p>
</body>
```

### 15.1.2. 이벤트리스너

- 이벤트가 발생하길 기다렸다가이벤트 발생 시 해당 이벤트를 처리

```html
<body>
  <button id="btn">클릭하세요!</button>

  <p id="show"></p>
  <script src="js/event.js"></script>
</body>
```

```js
let text = "";

document.getElementById("btn").addEventListener("click", function () {
  text += "안녕하세요!<br/>";
  document.getElementById("show").innerHTML = text;
});

document.getElementById("btn").addEventListener("click", function () {
  text += "반갑습니다!<br/>";
  document.getElementById("show").innerHTML = text;
});
```
