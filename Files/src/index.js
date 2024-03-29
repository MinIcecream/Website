window.onload = function () {
    var left = document.getElementById("left-handle");
    var right = document.getElementById("right-handle");
    var timeToIncrement = 8000;

    if (left) {
        left.addEventListener("click", decrementDisplay);
    }
    if (right) {
        right.addEventListener("click", incrementDisplay);
    }
    window.setInterval(incrementDisplay, timeToIncrement);
    var homeLink=document.getElementById("home-link");
    homeLink.addEventListener("click", setHomeActive);

    var gamesLink = document.getElementById("games-link");
    gamesLink.addEventListener("click", setGamesActive);

    var aboutLink = document.getElementById("about-link");
    aboutLink.addEventListener("click", setAboutActive);

    var pic = document.getElementById("about-pic");
    var text = document.getElementById("about-description")
    var header = document.getElementsByClassName("header")[0];
    if (pic)
    {
        window.addEventListener("scroll", function () {
            let value = window.scrollY;
            pic.style.top = value * .4 + "px";
            text.style.marginTop = value * .4 + "px";
            header.style.top = value * .4 + "px";
        })
    } 


    $("#email").hover(function () {
        $(this).html("<a class='footer-link' id='email' href='mailto: z331317@gmail.com'><i class='fa-solid fa-envelope-open'></i></a>");
    }, function () {
        $(this).html("<a class='footer-link' id='email' href='mailto: z331317@gmail.com'><i class='fa-solid fa-envelope'></i></a>");
    });
     
}
const total = 4;


function decrementDisplay() {
    var $slider = $(":root");
    let newProgress = parseInt($slider.css("--progress")) - 1;
    //if at end of second set, reset to end of first set.
    if (newProgress<0) {
        newProgress = total-1;

        moveToEnd();
        setTimeout(() => updateCount(newProgress), 1);
    }
    else {
        updateCount(newProgress);
    }
}

function incrementDisplay() {
    var $slider = $(":root");
    let newProgress = parseInt($slider.css("--progress")) + 1;

    //if at end of second set, reset to end of first set.
    if (newProgress > total * 2 - 1)
    {
        newProgress = total;

        moveToStart();
        setTimeout(() => updateCount(newProgress), 1);
    }
    else {
        updateCount(newProgress);
    }
}

function moveToStart() {
    $(".banner-link").css({ "transition": "all 0.0s ease-in-out" });
    $(":root").css("--progress", 3);
}
function updateCount(newProgress) {
    $(".banner-link").css({ "transition": "all 0.3s ease-in-out" });
    $(":root").css("--progress", newProgress);
}

function moveToEnd() {
    $(".banner-link").css({ "transition": "all 0.0s ease-in-out" });
    $(":root").css("--progress", 4);
}
function setHomeActive() {
    $(".nav-link").removeClass("selected");
    $(".home-link").addClass("selected");
}
function setGamesActive() {
    $(".nav-link").removeClass("selected");
    $(".games-link").addClass("selected");
}
function setAboutActive() {
    $(".nav-link").removeClass("selected");
    $(".about-link").addClass("selected");
}

  