const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // if (h1.style.color === "blue") {
  //   h1.style.color = "tomato";
  // } else {
  //   h1.style.color = "blue";
  // }
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
// h1.onclick = handleTitleClick;

// step1 Element를 찾아라
// step2 event를 listen 해라
// step3 그 event에 react 해라
