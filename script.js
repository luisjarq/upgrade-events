// 1.1
function printEvent(event) {
  console.log(event);
}
let btn = document.createElement("button");
btn.id = "btnToClick";
btn.appendChild(document.createTextNode("Imprime evento!"));
btn.addEventListener("click", printEvent);
document.body.appendChild(btn);
// 1.2
function PrintValue(event) {
  console.log(event.target.value);
}
let focusIn = document.querySelector(".focus");
focusIn.addEventListener("focus", PrintValue);
// 1.3
function getInput(event) {
  console.log(event.target.value);
}
let focusVal = document.querySelector(".value");
focusVal.addEventListener("input", PrintValue);
