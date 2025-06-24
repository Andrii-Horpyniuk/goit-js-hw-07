
const myInput = document.querySelector("#name-input");
const myOutput = document.querySelector("#name-output");

myInput.addEventListener("input", () => {
  const check = myInput.value.trim();
  myOutput.textContent = check !== "" ? check : "Anonymous";
});

//
myInput.style.width = "360px";
myInput.style.height = "40px";
myInput.style.color = "#2e2f42";

const titleStyle = document.querySelector("h1");

titleStyle.style.fontWeight = "600";
titleStyle.style.fontSize = "36px";
titleStyle.style.lineHeight = "1.3";
titleStyle.style.letterSpacing = "0.04em";
titleStyle.style.color = "#2e2f42";
