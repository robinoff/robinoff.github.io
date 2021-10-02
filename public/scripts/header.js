// sekcja header h1



const h1 = document.querySelector('.loading');
const balls = document.querySelectorAll('.ball');
const img = document.querySelector('img.header');

const text = "FITNESS MÓZGU";
let time = 140;
let index = 0;
let interval;


function addClass() {
    console.log('dodajemy paski');
    return new Promise((resolve) => {
        const divImg = document.querySelector('div.img');
        divImg.classList.add('active')
        setTimeout(resolve, 500);
    })
}

function addDots() {
    
    h1.textContent += text[index];
    index++;
    if (index === text.length) {
        clearInterval(interval)
    }
    return new Promise((resolve) => {
        setTimeout(resolve, 5000)
        
    })
}

function showBalls() {
    console.log('czekamy na piłki');
    return new Promise((resolve) => {
        setTimeout(resolve, 100)
    })
}

// sekcja Promise i funkcje po załadowaniu obrazka

function loadImg(url) {
    console.log('pobieramy zdjecie');
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener('load', ((event) => {
            resolve(img)
        }))
        img.addEventListener('error', ((reason) => {
            reject(new Error(`failed to load ${url}`))
        }))
        img.src = url
    })
}


loadImg('public/img/pileczki.jpg')
    .then((img) => {
        console.log('pobrano zdjecie');
        document.querySelector('div.img').appendChild(img);
        document.querySelector('div.img').appendChild(img).classList.add('header');
    })
    .then(() => {
        console.log("wyswietlono, pora na paski");
        return addClass()
    })
    .then(() => {
        console.log('paski wjechały');
        interval = setInterval(addDots, time)
    })
    .then(() => {
        return showBalls()
    })
    .then(() => {
        console.log('gotowe');
        balls.forEach((ball) => {
            ball.classList.add('start');
        })
    })
    .catch(reason => console.log(reason))

//  ASYNC AWAIT

// function ballsClass() {
//     balls.forEach((ball) => {
//         ball.classList.add('start');
//     })
// }

// function loadImg(url) {
//     console.log('pobieramy zdjecie');
//     return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.addEventListener('load', ((event) => {
//             resolve(img)
//         }))
//         img.addEventListener('error', ((reason) => {
//             reject(new Error(`failed to load ${url}`))
//         }))
//         img.src = url
//     })
// }
// (async () => {
//     await loadImg('public/img/pileczki.jpg')
//         .then((img) => {
//             document.querySelector('div.img').appendChild(img);
//             document.querySelector('div.img').appendChild(img).classList.add('header');
//         });
//     await addClass();
//     interval = setInterval(addDots, time);
//     await showBalls();    
//     ballsClass();
// })();


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
    if (document.querySelectorAll('i.fab').className = "active") {

        ball.addEventListener('click', (() => {
            const url = 'https://www.facebook.com/profile.php?id=100050637652208';

            const newWindow = window.open(url, "");
        }))
    }
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