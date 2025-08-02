const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

const altTexts = [
  'Closeup of a human eye',
  'Rock that looks like a wave',
  'Purple and white pansies',
  'Section of wall from a pharaoh\'s tomb',
  'Large moth on a leaf'
];


for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imageFilenames[i]);
  newImage.setAttribute('alt', altTexts[i]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function() {
    displayedImage.src = this.src;
    displayedImage.alt = this.alt;
  });
}


btn.addEventListener('click', function() {
  const className = btn.getAttribute('class');
  if (className === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});
