/* var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; */
/* var iceCream = 'chocolate';
if(iceCream === 'chocolate'){
    alert('Yay,I love chocolate ice cream!');

}else{
    alert('Awwww,but chocolate is my favirate...');
} */
/* 
function multiply(num1,num2){
    var result = num1 * num2;
    return result;
}
//multiply(4,7);
alert(multiply(0.5,3));  */
/* 
document.querySelector('html').onclick = function(){
    alert('Ouch! Stop pocking me!');
} */
var myImage = document.querySelector('img')
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.png');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }