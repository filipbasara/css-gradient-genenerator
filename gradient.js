const gradientBox = document.getElementById("gradient");
const refreshButton = document.getElementById("refresh");
const output = document.getElementById("output");
const copyButton = document.getElementById("copy-button");
const headline = document.getElementById("headline");
const banner = document.getElementById("banner");

let finalColor;

const generateGradient = function() {
  let gradientAngle = Math.floor(Math.random() * 360);
  let r1 = Math.floor(Math.random() * 256);
  let g1 = Math.floor(Math.random() * 256);
  let b1 = Math.floor(Math.random() * 256);
  let r2 = Math.floor(Math.random() * 256);
  let g2 = Math.floor(Math.random() * 256);
  let b2 = Math.floor(Math.random() * 256);

  finalColor = `linear-gradient(${gradientAngle}deg, rgb(${r1},${g1},${b1}) 0%, rgb(${r2},${g2},${b2}) 100%)`;

  gradientBox.style.background = finalColor;
  banner.style.background = finalColor;

  output.value = finalColor;
  copyButton.innerHTML = "Copy CSS to clipboard";

  return finalColor;
};

const copyStyles = function() {
  output.select();

  /* execCommand is deprecated but no alternative yet available in vanilla JS */
  document.execCommand("copy");
  copyButton.innerHTML = "✔ CSS was copied";
};

generateGradient();

refreshButton.addEventListener("click", function() {
  generateGradient();
});

output.addEventListener("click", function() {
  copyStyles();
});

copyButton.addEventListener("click", function() {
  copyStyles();
});

document.getElementById("year").innerHTML = new Date().getFullYear();
