// retrieve form elements
const form = document.getElementById('nl-form');
const timePeriod = form.elements['time-period'];
const cameraQuality = form.elements['camera-quality'];
const budget = form.elements['budget'];
const cameraType = form.elements['camera-type'];

// retrieve message elements
const secretMessage = document.getElementById('secret-message');
const revealButton = document.getElementById('reveal-button');
const resultText = document.getElementById('result-text');

// function to reveal the secret message
function revealMessage() {
  secretMessage.style.display = 'block';
}

// function to calculate the best fit camera based on user input
function calculateCamera() {
  let camera = '';

  // determine camera based on time period and quality
  if (timePeriod.value === '1' && cameraQuality.value === '1') {
    camera = 'Canon EOS Rebel T7 DSLR Camera';
  } else if (timePeriod.value === '2' && cameraQuality.value === '2') {
    camera = 'Sony Cyber-shot DSC-RX100 VII Camera';
  } else if (timePeriod.value === '3' && cameraQuality.value === '3') {
    camera = 'Fujifilm X-T3 Mirrorless Camera';
  } else if (timePeriod.value === '4' && cameraQuality.value === '4') {
    camera = 'Leica Q2 Monochrom Camera';
  } else {
    camera = 'Sorry, we could not find a camera that fits your criteria.';
  }

  // determine budget and camera type
  if (budget.value === '1' && cameraType.value === '1') {
    camera += ' (Point and Shoot)';
  } else if (budget.value === '2' && cameraType.value === '2') {
    camera += ' (DSLR)';
  } else if (budget.value === '3' && cameraType.value === '3') {
    camera += ' (Mirrorless)';
  } else if (budget.value === '4' && cameraType.value === '4') {
    camera += ' (Film)';
  } else {
    camera += ' (unspecified)';
  }

  resultText.innerText = `Based on your inputs, we recommend the ${camera}.`;
}

// add event listeners
revealButton.addEventListener('click', revealMessage);
form.addEventListener('submit', function(event) {
  event.preventDefault();
  calculateCamera();
});
