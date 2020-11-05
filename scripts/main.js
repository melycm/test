// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc == 'images/mely2.png') {
    myImage.setAttribute ('src', 'images/mely1.jpg');
  } else {
    myImage.setAttribute ('src', 'images/mely2.png')
  }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my world, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to my world, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}