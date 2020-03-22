//--------DOM selectors----//
var loginBtn = document.querySelector('.logbtn');
var signUp = document.querySelector('.register');

//-------EVENT LISTENERS----//
loginBtn.addEventListener('click', function(){
    console.dir(loginBtn);
});

signUp.addEventListener('click', function() {
    console.log(signUp);
});

//--------CAROUSEL FUNCTION----//
//declaring the vars
var i, images, time;
    i = 0;
    images = [];
    time = 3000;
//image list
images[0] = 'img/image1.jpg';
images[1] = 'img/image2.jpg';
images[2] = 'img/image3.jpg';
images[3] = 'img/image4.jpg';
images[4] = 'img/image5.jpg';
//image slide
function imgSlide(){
    document.slide.src = images[i];
    // console.dir(document.slide);
    if(i < images.length - 1){
        i++;
    } else{
        i = 0; 
    }
    setTimeout('imgSlide()', time);
};
window.onload = imgSlide;

