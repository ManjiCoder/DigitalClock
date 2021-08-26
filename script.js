setInterval(() => {
    let h2 = document.querySelector('h2');
    let h3 = document.querySelector('span');
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let time = (`${hrs}: ${mins}: `);
    time = h2.innerText = time;
    // secs = h3.innerText = secs;
    // let time = (`${hrs}: ${mins}: ${secs}`);
    let sec = h3.innerText = " \t" + secs + " AM";
    // h2.innerText = time;
}, 1000);
// date.setTime(1332403882588)


