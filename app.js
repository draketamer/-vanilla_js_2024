const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(title);
// h1.style.color = "blue";

console.dir(h1);

function handleTitleClick() {
  console.log("title was clicked!");
  h1.style.color = "blue";
}

function handleMouseEnter() {
  // console.log("mouse is here!");
  h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
  // console.log("mouse is gone!");
  h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WiFi");
}

function handleWindowOnline() {
  alert("All Good!");
}

h1.addEventListener("click", handleTitleClick);
// h1.onclick = handleTitleClick;

h1.addEventListener("mouseenter", handleMouseEnter);
// h1.onmouseenter = ("mouseenter", handleMouseEnter);

h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);

// 와이파이 연결상태 확인
window.addEventListener("offline", handleWindowOffline);

window.addEventListener("online", handleWindowOnline);
