var heightMulty = 4 //changes the linearity of the change, lower = faster

function track() {
    //variable for the opacity
    var Y = document.getElementById('scrolly');

    //prints out the value used
    //Y.innerHTML = 'Y = ' + (1-window.scrollY/(window.innerHeight*heightMulty)) + ' PX';
    
}

function subiYellow() {
    //variable for the opacity
    var subiYellowOpacity = document.getElementById('submarine-yellow');
    subiYellowOpacity.style.opacity = (1-window.scrollY/(window.innerHeight*heightMulty));
    if ((1-window.scrollY/(window.innerHeight*heightMulty)) > 0.9) {
        subiYellowOpacity.style.opacity = 0.9;
    }
} 

function subiBlack() {
    //variable for the opacity
    var subiBlackOpacity = document.getElementById('submarine-black');
    subiBlackOpacity.style.opacity = (window.scrollY/(window.innerHeight*heightMulty));
}

//calls the fuctions when page loaded
window.addEventListener('load', subiYellow);
window.addEventListener('load', subiBlack);

//calls the functions when scroll
window.addEventListener('scroll', track);
window.addEventListener('scroll', subiYellow);
window.addEventListener('scroll', subiBlack);



