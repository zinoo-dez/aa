const pianoKeys = document.querySelectorAll(".piano-keys .key"),
  volumeSlider = document.querySelector(".volume-slider input"),
  keysCheckbox = document.querySelector(".keys-checkbox input");
// console.log(pianoKeys);
// pianoKeys.forEach((p) => {
//   console.log(p);
//   p.onclick = () => {
//     alert(123);
//   };
// });

let allKeys = [],
  audio = new Audio("tunes/a.wav");

const playTune = (key) => {
  // audio.play();
  audio.src = `tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key= "${key}"]`);
  clickedKey.classList.add("active");

  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};
// data cnahe to dataset
pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  //   console.log(e.target.value);
  audio.volume = e.target.value;
};

const showHidekeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};

keysCheckbox.addEventListener("click", showHidekeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
