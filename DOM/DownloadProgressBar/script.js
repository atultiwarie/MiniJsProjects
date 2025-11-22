let btn = document.querySelector('#btn');
let progress = document.querySelector('.progress');
let h1Text = document.querySelector('h1');

let intervalId = null;    
let startTime = 0;
let isRunning = false;

btn.addEventListener('click', () => {
  if (isRunning) return;

  let width = 0;

  let timetaken = Math.floor(Math.random() * 91) + 10; 

  progress.style.width = '0%';
  h1Text.textContent = 'Download';
  btn.disabled = true;
  btn.textContent = 'Preparing...';


  setTimeout(() => {
    isRunning = true;
    btn.textContent = 'Downloading...';
    startTime = performance.now();

    intervalId = setInterval(() => {
      width++;
      if (width > 100) width = 100;

      progress.style.width = `${width}%`;
      h1Text.textContent = `Downloading... ${width}%`;

      if (width >= 100) {
        clearInterval(intervalId);
        intervalId = null;
        isRunning = false;

        let endTime = performance.now();
        let seconds = ((endTime - startTime) / 1000).toFixed(2);

        h1Text.textContent = `Download Complete in ${seconds} s`;
        btn.disabled = false;
        btn.textContent = 'Download Again';
      }
    }, timetaken);
  }, 50);
});
