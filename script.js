'use strict';
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let showColor = 'red';
let calc;
showRed();

function showRed() {
    red.style.backgroundColor = 'red';
    yellow.style.color = 'red';
    yellow.innerHTML = 10;
    calc = setInterval(function() {
        yellow.innerHTML--;
    }, 1000)
    setTimeout(function() {
        red.style.backgroundColor = 'rgb(19, 11, 11)';
        showColor = 'red';
        showYellow();
    }, 10000)
    
}

function showYellow() {
    yellow.style.backgroundColor = 'yellow';
    clearInterval(calc);
    yellow.innerHTML = '';
    setTimeout(function() {
        yellow.style.backgroundColor = 'rgb(19, 11, 11)';
        if (showColor === 'red') {
            showGreen();
        } else {
            showRed();
        } 
    }, 2000)
}

function showGreen() {
    green.style.backgroundColor = 'green';
    yellow.style.color = 'green';
    yellow.innerHTML = 15;
    calc = setInterval(function() {
        yellow.innerHTML--;
    }, 1000)
    setTimeout(function() {
        green.style.backgroundColor = 'rgb(19, 11, 11)';
        showColor = 'green';
        showYellow();
    }, 15000)
}
