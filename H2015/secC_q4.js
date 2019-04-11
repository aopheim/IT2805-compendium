let date = new Date();
let hour = date.getHours();
let mins = date.getMins();

let finished = false;

if (hour >= 12) {
    if (mins <20) {
        finished = false;
    } else {
        finished = true;
    }
}
