var header = document.getElementById('header');
var subheader = document.getElementById('subheader');

var typewriter = new Typewriter(header, {
    loop: true
});

var typewriter2 = new Typewriter(subheader, {
    loop: false
});

let header1 = "Hi there, I'm Anurag.";
let header2 = "Welcome to My Github";

let subHeader1 = "Nice to meet you.";
let subHeader2 = "Check out my work below.";

let typingSpeed = 20;
let deleteSpeed = 1;
let pauseDelay = 2000;

function subtyping(string) {
    typewriter2
        .changeDelay(5)
        .typeString(string)
        .start();
}

function subdelete() {
    typewriter2
        .deleteAll(1)
        .start();
}

function finaltype() {
    jQuery('#subheader').hide();
    jQuery('#headerSocial').fadeIn();
}

function typing() {

    typewriter
        .changeDelay(typingSpeed)
        .changeDeleteSpeed(deleteSpeed)
        .typeString(header1)
        .callFunction(function () {
            subtyping(subHeader1)
        })
        .pauseFor(pauseDelay)
        .callFunction(function () {
            subdelete()
        })
        .pauseFor(subHeader1.length * deleteSpeed)
        .deleteChars(21)

        .typeString(header2)
        .callFunction(function () {
            subtyping(subHeader2)
        })
        .pauseFor(pauseDelay)
        .callFunction(function () {
            subdelete()
        })
        .pauseFor(subHeader2.length * deleteSpeed)
        .deleteChars(19)

        .pauseFor(pauseDelay)
        .start();
}

typing();