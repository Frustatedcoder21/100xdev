let [hr, min, sec] = [0, 0, 0];

function clock() {
    sec++;
    if (sec >= 60) {
        min++;
        sec = 0;
    }
    if (min >= 60) {
        hr++;
        min = 0;
    }
    if (hr >= 24) {
        hr = 0;
    }
    console.log(`Time: ${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`);
}

setInterval(clock, 1000);
