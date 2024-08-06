//GLOBAL DECLARATIONS

const accordian = document.querySelectorAll('.label');
const filtersImage = document.querySelectorAll('.filters-image div');
const loanProducts = document.querySelectorAll('.loan');
const loanType = document.querySelectorAll('.yalla-products');
const openMenu = document.querySelector('.icon-menu');
const closeMenu = document.querySelector('.icon-close');
const menuBar = document.querySelector('.menu-bar');
let slide = document.querySelectorAll('.slider img');
let prev = document.querySelector('.lessthan-arrow');
let next = document.querySelector('.greaterthan-arrow');
const guideSteps = document.querySelector('.guide-steps');
const eachStep = document.querySelectorAll('.each-step');
let len = (eachStep.length) - 1;
let clicks = -1;
let index = 1;


// Open menu using hamburger icon

function openMenuBar() {
    openMenu.addEventListener('click', function () {
        menuBar.classList.remove('d-none-md');
        menuBar.classList.add('d-flex');
    })
}


// Close the menu using close icon

function closemenuBar() {
    closeMenu.addEventListener('click', function () {
        menuBar.classList.remove('d-flex');
        menuBar.classList.add('d-none-md');
    })
}

// Accordian for filtering of images

accordian.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        filtersImage.forEach((content) => {
            content.classList.remove('active');
        });
        accordian.forEach((tab) => {
            tab.classList.remove('active');
            tab.nextElementSibling.classList.remove('active')
        });
        filtersImage[index].classList.add('active');
        accordian[index].classList.add('active');
        accordian[index].nextElementSibling.classList.add('active');
    });
});

// Accordian for type of loan

loanProducts.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        loanProducts.forEach((tab) => {
            tab.classList.remove('activate');
        });
        loanType.forEach((content) => {
            content.classList.remove('selected');
        });
        loanProducts[index].classList.add('activate');
        loanType[index].classList.add('selected');
    });
});


//Previous button of slider 

function prevButton() {

    prev.addEventListener('click', function () {
        if (index <= 1) {
            prev.disabled = true;
        }
        else {
            index -= 1;
            slides(index);
        }
    })
}


// Next button of slider

function nextButton() {

    next.addEventListener('click', function () {
        if (index >= slide.length) {
            next.disabled = true;
        }
        else {
            index += 1;
            slides(index);
        }
    })
}

// Slider function

function slides() {

    for (let i = 0; i < slide.length; i++) {
        slide[i].parentNode.classList.remove('active');
    }
    slide[index - 1].parentNode.classList.add('active');
}

// Carousel function

function scroll(len, clicks) {
    guideSteps.addEventListener("click", function () {
        if (clicks > 3) {
            clicks = -1;
        }
        else {
            let removeOpa1 = document.querySelectorAll('.each-step')[len];
            removeOpa1.classList.remove('blur');
            clicks = clicks + 1;
            var appendEachStep = eachStep[clicks];
            guideSteps.append(appendEachStep);
            let addOpa1 = document.querySelectorAll('.each-step')[0];
            let addOpa2 = document.querySelectorAll('.each-step')[len];
            addOpa1.classList.add('blur');
            addOpa2.classList.add('blur');
        }
    })
};

if (window.matchMedia("(min-width:1024px)").matches) {
    scroll(len, clicks);
}

// A centralized init function to start the JS sequence

function init() {
    openMenuBar();
    closemenuBar();
    prevButton();
    nextButton();
    slides(index);    
}

// Initialize the app once the DOM is ready

document.addEventListener('DOMContentLoaded', init);


