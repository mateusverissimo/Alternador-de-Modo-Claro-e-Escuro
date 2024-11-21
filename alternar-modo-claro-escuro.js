let checkbox = document.querySelector("#modoescuro");
let body = document.querySelector("body");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.style.backgroundColor = "#333";
    body.style.color = "#fff";
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  }
});