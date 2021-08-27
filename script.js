// Set Interval With Arrow Function
setInterval(() => {
    // Varaibles Declarations
    let hr = document.getElementById('hr');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let ampm = document.getElementById('AM_PM');
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    // let h2 = document.querySelector('h2'); // This Is For Another Clock & Not Important.
    // Updating innerText
    hrs = hr.innerText = hrs;
    // hrs = hr.innerText = 24;
    mins = min.innerText = mins;
    secs = sec.innerText = secs;

    // IF STATEMENT
    if (secs < 10) {
        secs = sec.innerText = "0" + secs;
    }
    if (mins < 10) {
        mins = min.innerText = "0" + mins;
    }
    if (hrs <= 11) {
        hrs = 12 - (-hrs);
        ampm = ampm.innerText = "AM";
        if (hrs < 10) {
            hrs = hr.innerText = "0" + hrs;
        }
    }
    if (hrs == 12) {
        hrs = 12 - (-hrs);
        ampm = ampm.innerText = "PM";
    }
    if (hrs == 24) {
        hrs = hrs;
        ampm = ampm.innerText = "AM";
    }
    if (hrs >= 13 | hrs <= 23) {
        hrs = hrs - 12;
        ampm = ampm.innerText = "PM";
        if (hrs < 10) {
            hrs = hr.innerText = "0" + hrs;
        }
    }
    else {
        // console.log('error');
    }
    hrs = hr.innerText = hrs + ":";
    mins = min.innerText = mins + ":";

    // let displayTime = (`${hrs}: ${mins}: ${secs} ${ampm}`); // This Is For Another Clock & Not Important.
    // h2.innerText = displayTime; // This Is For Another Clock & Not Important.
}, 1000);
