let font_size = 1.4;

const makeBigger = (ev) => {
   font_size += 0.3;
   document.querySelector('.content').style.fontSize = `${font_size}em`;
   document.querySelector('h1').style.fontSize = `${font_size + 0.5}em`;
};

const makeSmaller = (ev) => {
   font_size -= 0.3;
   document.querySelector('.content').style.fontSize = `${font_size}em`;
   document.querySelector('h1').style.fontSize = `${font_size + 0.5}em`;
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

