function counter() {

    const endTime = new Date('2021-11-07 8:47:00').getTime();

    const spanD = document.querySelector('span.d');
    const spanH = document.querySelector('span.h');
    const spanM = document.querySelector('span.m');
    const spanS = document.querySelector('span.s');

    
    const interval = setInterval(() => {
        const nowTime = new Date().getTime();
        // const time = Math.floor((endTime - nowTime) / 1000);
        const time = endTime - nowTime;
        const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
        

        let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);

        hours = hours < 10 ? `0${hours}` : hours;

        let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        
        let secs = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
        secs = secs < 10 ? `0${secs}` : secs;

        spanD.textContent = `d:${days}`;
        spanH.textContent = `h:${hours}`;
        spanM.textContent = `m:${minutes}`;
        spanS.textContent = `s:${secs}`;
        
        
        if (spanD.textContent === 'd:0' && spanH.textContent === 'h:00' && spanM.textContent === 'm:00' && spanS.textContent === 's:00') {
            clearInterval(interval);
            console.log('teraz');
        }
    }, 1000);


}

counter()