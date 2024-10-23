const title = document.querySelector("div.hello:first-child h1");

// console.dir(title);
// title.style.color = "blue";

function handleTitleClick() {
  console.log("title was clicked!");
  title.style.color = "blue";
}

// 클릭하면 글씨가 파랑으로 바뀌고 콘솔창에 타이틀 워즈 클릭드라는 스트링 출력
title.addEventListener("click", handleTitleClick);
