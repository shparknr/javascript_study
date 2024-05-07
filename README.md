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

## 15.2. 마우스 이벤트

- 마우스에 관련된 이벤트는 웹에서 가장 많이 사용된다.
- onclick : 사용자가 요소를 클릭했을 때
- ondbclick : 사용자가 요소를 더블 클릭 했을 때
- onmouseover : 마우스 포인터가 요소 위에 올라갔을 때, 자식요소에 대해서도 동작
- onmouseout : 마우스 포인터가 요소에서 벗어날 때, 자식요소에 대해서도 동작
- onmouseenter : 마우스 포인터가 요소 안으로 진입할 때, 자식요소에 대해서 동작하지 않는다.
- onmouseleave : 마우스 포인터가 요소에서 외부로 나갈 때, 자식요소에 대해서 동작하지 않는다.
- onmousemove : 마우스 포인터가 요소안에서 움직일 때

### 15.2.1. onclick / ondbclick 이벤트

```html
<body>
  <button onclick="showMessage1(this)">클릭하세요!</button>
  <button ondblclick="showMessage2(this)">더블클릭하세요!</button>

  <p id="show"></p>
  <script src="js/event.js"></script>
</body>
```

```js
function showMessage1() {
  document.getElementById("show").innerHTML = "클릭했어요!";
}

function showMessage2() {
  document.getElementById("show").innerHTML = "더블 클릭했어요!";
}
```

### 15.2.2. onmouseover / onmouseout 이벤트

```html
<body>
  <button onmouseover="changeBg1(this)" onmouseout="changeBg2(this)">
    마우스를 올려보세요
  </button>

  <p id="show"></p>

  <script src="js/event.js"></script>
</body>
```

```js
function changeBg1(btn) {
  btn.style.backgroundColor = "pink";
}

function changeBg2(btn) {
  btn.style.backgroundColor = "";
}
```

### 15.2.3. onmouseenter 이벤트

- onmouseover 이벤트와 유사한 기능

```html
<!-- Document -->
<!DOCTYPE html>
<!-- 요소: html, 속성: Lang -->
<html lang="ko">
  <!-- 요소: head -->
  <head>
    <!-- 요소: meta, 속성: charset -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 요소: title, 텍스트: 자바스크립트 스터디 -->
    <title>자바스크립트 스터디</title>
    <style>
      div#box1{
        border: solid 3px red;
      }
      div#box2{
        border: solid 3px blue
      }
      p{
        border: solid 1px black;
      }
    </style>
  </head>
  <body>
    <div id="box1" onmouseenter="increaseX()">
      <p>단락1</p>
      <span id="show1"></span>
    </div>

    <div id="box2" onmouseover="increaseY()">
      <p>단락2</p>
      <span id="show2"></span>
    </div>

    <script src="js/event.js"></script>
  </body>
  </body>
</html>
```

```js
let x = 0,
  y = 0;

function increaseX() {
  x += 1;
  document.getElementById("show1").innerHTML = x;
}

function increaseY() {
  y += 1;
  document.getElementById("show2").innerHTML = y;
}
```

### 15.2.4 onmouseleave 이벤트

- onmouseout 이벤트와 유사한 기능

```html
<body>
  <div id="box1" onmouseleave="increaseX()">
    <p>단락1</p>
    <span id="show1"></span>
  </div>

  <div id="box2" onmouseout="increaseY()">
    <p>단락2</p>
    <span id="show2"></span>
  </div>
</body>
```

### 15.2.5. onmousemove 이벤트

- 요소 내에서 마우스가 이동할 때 발생

```html
<style>
      div#box{
        border: solid 3px red;
        width: 300px;
        height: 200px;
      }

</style>
</head>
<body>
    <div id="box" onmousemove="showCoord(event)">
      <p id="show"></p>
    </div>

    <script src="js/event.js"></script>
</body>
```

```js
function showCoord(e) {
  // let text = "좌표: (" + e.clientX + "," + e.clientY + ")";
  let text = `좌표: (  ${e.clientX} ,  ${e.clientY}  )`;
  document.getElementById("show").innerHTML = text;
}
```

### 15.3. 스크롤 동작으로 따라 양 옆으로 움직이는 텍스트

- textmove.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>스크롤 동작으로 따라 양 옆으로 움직이는 텍스트</title>
    <style>
      body,
      html {
        height: 200%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .text {
        position: fixed;
        white-space: nowrap;
      }
      #textTop {
        top: 50%;
      }
      #textBottom {
        bottom: 50%;
      }
    </style>
  </head>
  <body>
    <div id="textTop" class="text">위쪽 텍스트 - 오른쪽으로 이동</div>
    <div id="textBottom" class="text">아래쪽 텍스트 - 왼쪽으로 이동</div>

    <script src="js/textmove.js"></script>
  </body>
</html>
```

- textmove.js

```js
document.addEventListener("scroll", function () {
  const scrollAmount = window.scrollY;
  const textTop = document.getElementById("textTop");
  const textBottom = document.getElementById("textBottom");

  textTop.style.transform = `translateX(${scrollAmount * 0.5}px)`;
  textBottom.style.transform = `translateX(-${scrollAmount * 0.5}px)`;
});
```

### 15.4. 마우스 물결 효과 만들기

- wave.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>마우스 물결 효과</title>
    <link rel="stylesheet" href="style/wave.css" />
  </head>
  <body>
    <script src="js/wave.js"></script>
  </body>
</html>
```

- wave.css

```css
body,
html {
  height: 100%;
  margin: 0;
  overflow: hidden;
  background: #303848;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle closest-side,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0) 70%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset 0 0 20px 10px rgba(255, 255, 255, 0.1), 0 0 30px rgba(0, 0, 0, 0.1); /* 외부 그림자 */
  animation: ripple-animation 1.8s ease;
  pointer-events: none;
}
@keyframes ripple-animation {
  0% {
    transform: scale(0);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}
```

- wave.js

```js
document.addEventListener("mousemove", function (e) {
  let ripple = document.createElement("div");
  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX - 50}px`;
  ripple.style.top = `${e.clientY - 50}px`;

  ripple.addEventListener("animationend", () => {
    ripple.parentElement.removeChild(ripple);
  });
});
```
