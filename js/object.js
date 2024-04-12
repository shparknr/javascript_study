const dog = {
  name: "댕댕이",
  species: "믹스",
  color: "흰색",
  age: 3,
  // 메서드
  intro: function () {
    // this는 dog를 가리킨다
    return `우리집 강아지 이름은 ${this.name} 입니다.`;
  },
};

// 메서드 추가하기
dog.getAge = function () {
  return `나이는 ${this.age}살 입니다.`;
};

document.getElementById("show").innerHTML = dog.getAge();
