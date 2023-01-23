const circle_green = document.querySelector('#thousand_unit');
const circle_green_all = document.querySelectorAll('#thousand_unit div');
const thousand = document.querySelector('.mil')
import {
    continueCycleSum,
    selectAllAfter,
} from './functionsAll.js'; 

let CONTGREEN = 0;

circle_green.addEventListener('click', (e) => {

    CONTGREEN = continueCycleSum(thousand);
        
    const classlIst = e.target.classList[2];

    if (classlIst === 'green_one') {
        e.target.className = 'circle green one';
        CONTGREEN ++
        thousand.innerHTML = CONTGREEN;
        return;
    } else if (classlIst === 'one') {
        e.target.className = 'circle green green_one';
        CONTGREEN--
        thousand.innerHTML = CONTGREEN;
        return 
    };

    if (classlIst === 'green_two') {
        e.target.className = 'circle green two';
        selectAllAfter(circle_green_all, 0, 'green', 'one')

        CONTGREEN = 2;
        thousand.innerHTML = CONTGREEN;
        return

    } else if (classlIst === 'two') {
        e.target.className = 'circle green green_two';
        // selectAllAfter(circle_green_all, 0, 'green', 'green_one')

        CONTGREEN--
        thousand.innerHTML = CONTGREEN;
        return 
    };

    if (classlIst === 'green_tree') {
        e.target.className = 'circle green tree'
        selectAllAfter(circle_green_all, 1, 'green', 'two')

        CONTGREEN = 3;
        thousand.innerHTML = CONTGREEN;
        return 
    } else if (classlIst === 'tree') {
        e.target.className = 'circle green green_tree'
        CONTGREEN--
        thousand.innerHTML = CONTGREEN;
        return 
    };

    if (classlIst === 'green_four') {
        e.target.className = 'circle green four';
        selectAllAfter(circle_green_all, 2, 'green', 'tree')

        CONTGREEN = 4;
        thousand.innerHTML = CONTGREEN;
        return 
    } else if (classlIst === 'four') { 
        e.target.className = 'circle green green_four';
        CONTGREEN--
        thousand.innerHTML = CONTGREEN;
        return 
    };

    if (classlIst === 'green_five') {
        e.target.className = 'circle green five';
        selectAllAfter(circle_green_all, 3, 'green', 'four')

        CONTGREEN = 5;
        thousand.innerHTML = CONTGREEN;
        return 
    } else if (classlIst === 'five') { 
        e.target.className = 'circle green green_five';
        CONTGREEN--
        thousand.innerHTML = CONTGREEN;
        return 
    };

    if (classlIst === 'green_six') {
        e.target.className = 'circle green six';
        selectAllAfter(circle_green_all, 4, 'green', 'five')

        CONTGREEN = 6;
        thousand.innerHTML = CONTGREEN;
        return 
    } else if (classlIst === 'six') { 
        e.target.className = 'circle green green_six';
        CONTGREEN--
        thousand.innerHTML = CONTGREEN;
        return 
    }

    if (classlIst === 'green_serven') {
        e.target.className = 'circle green serven';
        selectAllAfter(circle_green_all, 5, 'green', 'six')

        CONTGREEN = 7;
        thousand.innerHTML = CONTGREEN;
        return 
    } else if (classlIst === 'serven') { 
        e.target.className = 'circle green green_serven';
        CONTGREEN--
        thousand.innerHTML = CONTGREEN;
        return 
    }

    if (classlIst === 'green_eight') {
        e.target.className = 'circle green eight';
        selectAllAfter(circle_green_all, 6, 'green', 'serven')

        CONTGREEN = 8;
        thousand.innerHTML = CONTGREEN;
        return 
    } else if (classlIst === 'eight') { 
        e.target.className = 'circle green green_eight';
        CONTGREEN--
        thousand.innerHTML = CONTGREEN;
        return 
    }

    if (classlIst === 'green_nine') {
        e.target.className = 'circle green nine';
        selectAllAfter(circle_green_all, 7, 'green', 'eight')

        CONTGREEN = 9;
        thousand.innerHTML = CONTGREEN;
        return 
    } else if (classlIst === 'nine') { 
        e.target.className = 'circle green green_nine';
        CONTGREEN--
        thousand.innerHTML = CONTGREEN;
        return 
    }
})
