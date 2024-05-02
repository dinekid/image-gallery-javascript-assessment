const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['images\Helldivers2.jpg', 'images\MagicCom.jpg', 'images\paintingmini.jpg', 'images\RallyRace.jpg', 'images\role-playing-games.jpeg'];
const alts = {
  'images\Helldivers2.jpg': 'Squad just looking awesome',
  'images\MagicCom.jpg': 'some folks sitting around a table looking happy but soon to be mad',
  'images\paintingmini.jpg': 'Someone painting their stress and troubles away',
  'images\RallyRace.jpg': 'Something I enjoy watching on TV, but would rather try once',
  'images\role-playing-games.jpeg': 'Folks around the table telling an epic story'
};

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.src = `images/${image}`;
  newImage.alt = alts[image];
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

btn.addEventListener('click', () => {
  const btnClass = btn.classList.contains('dark') ? 'light' : 'dark';
  btn.classList.toggle('dark');
  btn.classList.toggle('light');
  btn.textContent = btnClass === 'dark' ? 'Darken' : 'Lighten';
  overlay.style.backgroundColor = btnClass === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)';
});