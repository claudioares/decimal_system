import {
    resetAll, resetInitCircle,
    resetNumber, setMoveCircle
} from './functionsAll.js';

const input = document.querySelector('.div_input input');
const sistem_number = document.querySelectorAll('.sistem_number span')
const reset = document.querySelector('.btn_reset');
const circleOrange = document.querySelectorAll('#unity div');
const circleBlue = document.querySelectorAll('#ten div');
const circlePink = document.querySelectorAll('#hundred div');
const circleGreen = document.querySelectorAll('#thousand_unit div');

input.addEventListener('keypress', (e) => {

    let state00 = null;
    let state01 = null;
    let state02 = null;
    let state03 = null;

    if (e.key === 'Enter') {
        e.preventDefault();

        resetInitCircle(circleOrange, 'orange');
        resetInitCircle(circleBlue, 'blue');
        resetInitCircle(circlePink, 'pink');
        resetInitCircle(circleGreen, 'green');

        resetNumber();
        
        let numberInput = String(input.value);

        numberInput.split('').reverse().map(num => {

            if (!state03) {
                sistem_number[3].innerHTML = num;
                state03 = true;

                
                setMoveCircle(num, circleOrange, 'orange')
                return
            };
            if (!state02) {
                sistem_number[2].innerHTML = num;
                state02 = true;

                setMoveCircle(num, circleBlue, 'blue')
                return
            };
            if (!state01) {
                sistem_number[1].innerHTML = num;
                state01 = true;

                setMoveCircle(num, circlePink, 'pink')
                return
            };
            if (!state00) {
                sistem_number[0].innerHTML = num;
                state00 = true;

                setMoveCircle(num, circleGreen, 'green')
                return
            };
        });
        input.value = '';
    }
})

reset.addEventListener('click', resetAll)