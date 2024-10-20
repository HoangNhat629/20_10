onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
function rain() {
  let cloud = document.querySelector('.cloud');
  let e = document.createElement('div');

  e.classList.add('heart');
  cloud.appendChild(e);

  let left = Math.floor(Math.random() * 280);
  let size = Math.random() * 1.5;
  let duration = Math.random() * 2 + 3; 
  e.style.left = left + 'px';
  e.style.fontSize = 0.5 + size + 'em';
  e.style.animationDuration = duration + 's';

  setTimeout(function () {
      cloud.removeChild(e);
  }, duration * 1000); 
}

setInterval(function () {
  rain();
}, 500); 
