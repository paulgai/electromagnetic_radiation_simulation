const imageMap = {
  radio: "images/radio.png",
  microwave: "images/smartphone.png",
  infrared: "images/heating_element.png",
  visible: "images/bulb.png",
  ultraviolet: "images/sun.png",
  xray: "images/xray.png"
};

const radioButtons = document.querySelectorAll('input[name="spectrum"]');
const canvasImage = document.querySelector(".canvas-image");

function updateImage(value) {
  const src = imageMap[value];
  if (src) {
    canvasImage.src = src;
  }
}

radioButtons.forEach((btn) => {
  btn.addEventListener("change", (e) => {
    updateImage(e.target.value);
  });
});

const selected = document.querySelector('input[name="spectrum"]:checked');
if (selected) updateImage(selected.value);
