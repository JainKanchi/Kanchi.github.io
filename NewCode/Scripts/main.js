var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var newImg = document.querySelector('img');
newImg.onclick = function(){
  var ImgSrc = newImg.getAttribute('src');
  if( ImgSrc === 'images/firefox-icon.png'){
    newImg.setAttribute('src','images/abc.png');
  }
  else{
    newImg.setAttribute('src','images/firefox-icon.png');
  }
}

var changeUser = document.querySelector('button');

changeUser.onclick = function(){

  var UserName = prompt("Please enter your name");
  localStorage.setItem('name' , UserName);

  myHeading.textContent = 'it is a great day ' + UserName;


}
