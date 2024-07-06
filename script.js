const imgs = document.querySelectorAll('.img');
const img = document.querySelectorAll('.img img');

const overlay = document.querySelector('.overlay');
const overlayImg = document.querySelector('.overlay img');
const box = document.querySelector('.box');

// imgs.addEventListener('click', () => {
//   overlay.style.zIndex = '1';
//   box.style.opacity = 1;
//   overlayImg.src = img.src;
// });

imgs.forEach((div, index) => {
  div.addEventListener('click', () => {
    overlay.style.zIndex = '1';
    box.style.opacity = '1';
    overlayImg.src = img[index].src;
  });
});

overlay.addEventListener('click', () => {
  overlay.style.zIndex = '-1';
  box.style.opacity = '0';
});
