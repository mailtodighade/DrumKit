//Detecting a click event on perticular buttons
for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var keyClicked = this.innerHTML;
    console.log(keyClicked);
    makeSound(keyClicked);
    changeState(keyClicked);
  });
}

// Detecting  keyPress event on the whole document.....
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  makeSound(e.key);
  changeState(e.key);
});
// Creating a fucntion which will be valid for both the events
// the main task of that function is to just make the sound based on the key input

function makeSound(key) {
  switch (key) {
    case 'a':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 's':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'd':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'f':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'g':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'h':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'j':
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    default:
      console.log(key);

      break;
  }
}

function changeState(activeKey) {
  document.querySelector('.' + activeKey).classList.add('pressed');
  setTimeout(function () {
    document.querySelector('.' + activeKey).classList.remove('pressed');
  }, 100);
}
