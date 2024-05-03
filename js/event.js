let text = "";

document.getElementById("btn").addEventListener("click", function () {
  text += "안녕하세요!<br/>";
  document.getElementById("show").innerHTML = text;
});

document.getElementById("btn").addEventListener("click", function () {
  text += "반갑습니다!<br/>";
  document.getElementById("show").innerHTML = text;
});
