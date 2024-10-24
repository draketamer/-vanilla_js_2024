const title = document.querySelector("div.hello:first-child h1");

// console.dir(title);
// title.style.color = "blue";

console.dir(title);

function handleTitleClick() {
  console.log("title was clicked!");
  title.style.color = "blue";
}

function handleMouseEnter() {
  // console.log("mouse is here!");
  title.innerText = "mouse is here!";
}

function handleMouseLeave() {
  // console.log("mouse is gone!");
  title.innerText = "mouse is gone!";
}

// 클릭하면 글씨가 파랑으로 바뀌고 콘솔창에 타이틀 워즈 클릭드라는 스트링 출력
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
