setInterval(() => {
    // Varaibles Declarations
    let h2 = document.querySelector('h2')
    let hr = document.getElementById('hr')
    let min = document.getElementById('min')
    let sec = document.getElementById('sec')
    let pm = document.getElementById('AM_PM')
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    // updating innerText
    hrs = hr.innerText = hrs;
    mins = min.innerText = mins;
    secs = sec.innerText = secs;
    pm = pm.innerText = "AM";

    // hrs = hr.innerText = hrs + ":";
    // mins = min.innerText = mins + ":";

    // IF STATEMENT
    if (secs < 10) {
        secs = sec.innerText = "0" + secs;
    }
    if (mins < 10) {
        mins = min.innerText = "0" + mins;
    }
    if (hrs < 10) {
        hrs = hr.innerText = "0" + hrs;
    }
    if (hrs < 24) {
        hrs = hrs - 12;
        pm = pm.innerText = "PM";
    }
    else {
        // console.log('error')
    }
    let displayTime = (`${hrs}: ${mins}: ${secs} ${pm}`);
    h2.innerText = displayTime;
}, 1000);
