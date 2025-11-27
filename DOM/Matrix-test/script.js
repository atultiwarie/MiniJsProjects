const p = document.querySelector("p");
const text = p.innerText;
const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;


function randomChar() {
  const res = text
    .split("")
    .map((char, index) => {
      if (index < iteration) {
        return char;
      }
      return str[Math.floor(Math.random() * str.length)];
    })
    .join("");
  p.innerText = res;
  iteration += 0.25;
}

setInterval(randomChar, 100);



