const btn = document.getElementById("btn");
const colorBox = document.getElementById("color-box");


function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

btn.addEventListener("click", () => {
  const randomColor = getRandomColor();
  colorBox.textContent = randomColor;
  colorBox.style.background = randomColor;
});
