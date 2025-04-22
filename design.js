const frontTextInput = document.getElementById('frontText');
const backTextInput = document.getElementById('backText');
const frontTextDisplay = document.getElementById('frontTextDisplay');
const backTextDisplay = document.getElementById('backTextDisplay');

const card = document.getElementById('card');
const flipBtn = document.getElementById('flipBtn');

const frontPreview = document.getElementById('frontPreview');
const backPreview = document.getElementById('backPreview');

const cardColor = document.getElementById('cardColor');
const textColor = document.getElementById('textColor');
const frontFace = document.getElementById('frontFace');
const backFace = document.getElementById('backFace');

// Flip the card
flipBtn.addEventListener('click', () => {
  card.classList.toggle('flip');
});

// Update text
frontTextInput.addEventListener('input', () => {
  frontTextDisplay.textContent = frontTextInput.value;
});

backTextInput.addEventListener('input', () => {
  backTextDisplay.textContent = backTextInput.value;
});

// Update background color
cardColor.addEventListener('input', () => {
  frontFace.style.backgroundColor = cardColor.value;
  backFace.style.backgroundColor = cardColor.value;
});

// Update text color
textColor.addEventListener('input', () => {
  frontTextDisplay.style.color = textColor.value;
  backTextDisplay.style.color = textColor.value;
});

// Front image upload
document.getElementById('frontImg').addEventListener('change', function (e) {
  const reader = new FileReader();
  reader.onload = function () {
    frontPreview.src = reader.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

// Back image upload
document.getElementById('backImg').addEventListener('change', function (e) {
  const reader = new FileReader();
  reader.onload = function () {
    backPreview.src = reader.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});
