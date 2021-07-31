// sekcja header h1



const h1 = document.querySelector('.loading');
const balls = document.querySelectorAll('.ball');
const img = document.querySelector('img.header');

const text = "FITNESS MÓZGU";
let time = 140;
let index = 0;
let interval;


function addClass() {
    const divImg = document.querySelector('div.img');

    divImg.classList.add('active');

}



function addDots() {

    h1.textContent += text[index];
    index++;
    if (index === text.length) {
        clearInterval(interval)
    }

}


img.src = "../public/img/pileczki.jpg";

window.addEventListener('DOMContentLoaded', function (e) {
    console.log('ready now');

    setTimeout(() => {
        addClass()
    }, 100);

    setTimeout(() => {
        interval = setInterval(addDots, time)
    }, 200);

    balls.forEach((ball) => {
        ball.classList.add('start');
    })


});




// sekcja balls kolory



balls.forEach((ball) => {

    ball.addEventListener('mouseover', function () {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);

        const redF = Math.floor(Math.random() * 255);
        const greenF = Math.floor(Math.random() * 255);
        const blueF = Math.floor(Math.random() * 255);

        this.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
        this.firstElementChild.style.color = `rgb(${redF}%, ${greenF}%, ${blueF}%)`;


    })
})



// dotykowe ekrany

document.addEventListener('touchstart', function () {

    balls.forEach((ball) => {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);

        const redF = Math.floor(Math.random() * 255);
        const greenF = Math.floor(Math.random() * 255);
        const blueF = Math.floor(Math.random() * 255);

        ball.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
        ball.firstElementChild.style.color = `rgb(${redF}%, ${greenF}%, ${blueF}%)`;
    })
})

// sekcja balls facebook

balls.forEach((ball) => {
    ball.addEventListener('click', (() => {
        const url = 'https://www.facebook.com/profile.php?id=100050637652208';

        const newWindow = window.open(url, "");
    }))
})


//  sekcja skrolowanie 

const wrapper = document.querySelector('.wrapper');
const html = document.documentElement;
const section = document.querySelector('.blog')

document.addEventListener('scroll', function () {

    const scroolPosition = html.scrollTop;
    const wrapperHeight = window.innerHeight;
    const sectionBlog = section.offsetTop;

    if (scroolPosition < sectionBlog) {

        wrapper.style.filter = `grayscale(${2* scroolPosition/wrapperHeight})`
        wrapper.style.opacity = `${1 - scroolPosition/wrapperHeight}`
    }
    // console.log(scroolPosition, sectionBlog);



})

// arrows

const arrow = document.querySelector('div.arrows');

document.addEventListener('scroll', function () {

    const scrollPosition = html.scrollTop;
    const scrollTotal = html.scrollHeight - html.clientHeight;
    // console.log(scrollPosition, scrollTotal);

    const iconF = document.querySelectorAll('i.fab');
    iconF.forEach((icon) => {
        if (scrollPosition / scrollTotal > 0.5) {
            icon.classList.add('active');
        }
    })


    if (scrollPosition / scrollTotal > 0.2) {
        arrow.classList.add('active');

    } else {
        arrow.classList.remove('active');
    }
})

arrow.addEventListener('click', function () {
    html.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})