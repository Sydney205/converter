// Inputs...
var pixels = document.getElementById("pixels");
var rems = document.getElementById("rems");
var points = document.getElementById("points");
var result = document.getElementById("result");

// Browser's default Pixels size
var defaultPX = document.getElementById("defaultPX");
defaultPX.value = 16;

// 1 rem = 12pt
// 1 point = 1.333px
// 1 Pixel = 0.75pt

// On change event listeners...
pixels.addEventListener("change", () => {
  rems.value = null;
  points.value = null;
  rems.placeholder = pixels.value / defaultPX.value + " rem";
  points.placeholder = pixels.value * 0.75 + " pt";
});

rems.addEventListener("change", () => {
  points.value = null;
  pixels.value = null;
  points.placeholder = rems.value * 12 + " pt";
  pixels.placeholder = rems.value * defaultPX.value + " px";
});

points.addEventListener("change", () => {
  rems.value = null;
  pixels.value = null;
  rems.placeholder = points.value / 12 + " rem";
  pixels.placeholder = points.value * 1.333 + " px";
});
