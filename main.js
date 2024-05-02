const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Array of image filenames
const images = ['Helldivers2.jpg', 'MagicCom.jpg', 'paintingmini.jpg', 'RallyRace.jpg', 'role-playing-games.jpeg'];

// Object containing alternative text for images
const alts = {
  'Helldivers2.jpg': 'Squad just looking awesome',
  'MagicCom.jpg': 'Happy people around a table about to get mad',
  'paintingmini.jpg': 'Someone painting away their stress',
  'RallyRace.jpg': 'Exciting TV moment I want to try once',
  'role-playing-games.jpeg': 'Friends telling an epic story'
};

// Looping through the images to create thumbnails
for (const image of images) {
  // Create a new thumbnail image element
  const newImage = document.createElement('img');
  // Set the image source to the filename in the images folder
  newImage.src = `images/${image}`;
  // Set the alternative text for accessibility
  newImage.alt = alts[image];
  // Append the thumbnail image to the thumbnail bar
  thumbBar.appendChild(newImage);
  // Add click event listener to each thumbnail image
  newImage.addEventListener('click', e => {
    // Update the displayed image to the clicked thumbnail
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

// Add click event listener to the button for toggling dark/light effect
btn.addEventListener('click', () => {
  // Check if the button is currently dark or light
  const btnClass = btn.classList.contains('dark') ? 'light' : 'dark';
  // Toggle the button's class between dark and light
  btn.classList.toggle('dark');
  btn.classList.toggle('light');
  // Update the button text to Darken or Lighten based on class
  btn.textContent = btnClass === 'dark' ? 'Darken' : 'Lighten';
  // Update the overlay background color based on the button class
  overlay.style.backgroundColor = btnClass === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)';
});