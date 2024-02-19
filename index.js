var sign;
var first;
var second;
var emptyF = false;
var emptyS = false;
var sign_used = false;

const display = document.getElementById("Result");

function numbers(num) {
    if (sign_used == false) {
        if (emptyF == false) {
            emptyF = true;
            first = num;
            display.innerHTML = first
        } else {
            first += num;
            display.innerHTML = first
        };
        console.log(first);
    } else if (sign_used == true){
        if (emptyS == false) {
            emptyS = true;
            second = num;
            display.innerHTML += second
        } else {
            second += num;
            display.innerHTML += num
        };
        console.log(second);
    };
};

function signs(sig) {
    if (sign_used == false) {
        sign_used = true;
        console.log(sig);
        sign = sig ;
        display.innerHTML += sign
    };
};

function calculate() {
    console.log("CALCULATING!");
    var result;
    if (sign == '+') {
        console.log("found sign...")
        result = parseInt(first) + parseInt(second);
    } else if (sign == '-') {
        console.log("found sign...")
        result = parseInt(first) - parseInt(second);
    } else if (sign == '*') {
        console.log("found sign...")
        result = parseInt(first) * parseInt(second);
    } else if (sign == '/') {
        console.log("found sign...")
        result = parseInt(first) / parseInt(second);
    };

    console.log(result);
    display.innerHTML = result
    emptyF = false;
    emptyS = false;
    sign_used = false;
};
