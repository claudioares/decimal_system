const circle_blue = document.querySelector('#ten');
const ten = document.querySelector('.dez');
const circle_blue_all = document.querySelectorAll('#ten div');
import {
    continueCycleSum,
    selectAllAfter
} from './functionsAll.js'; 

let CONTBLUE = 0;


circle_blue.addEventListener('click', (e) => {


    CONTBLUE = continueCycleSum(ten);
    
    const classlIst = e.target.classList[2];


    if (classlIst === 'blue_one') {
        e.target.className = 'circle blue one';
        
        
        CONTBLUE ++
        ten.innerHTML = CONTBLUE;
        return
    } else if (classlIst === 'one') {
        e.target.className = 'circle blue blue_one';
        
        CONTBLUE--;
        ten.innerHTML = CONTBLUE;
        return
    };

    if (classlIst === 'blue_two') {
        e.target.className = 'circle blue two';
        selectAllAfter(circle_blue_all, 0, 'blue', 'one')
        
        CONTBLUE = 2;
        ten.innerHTML = CONTBLUE;
        return
    } else if (classlIst === 'two') {
        e.target.className = 'circle blue blue_two';
        
        CONTBLUE --
        ten.innerHTML = CONTBLUE;
        return
    }
    if (classlIst === 'blue_tree') {
        e.target.className = 'circle blue tree'
        selectAllAfter(circle_blue_all, 1, 'blue', 'two')
        
        CONTBLUE = 3;
        ten.innerHTML = CONTBLUE;
        return
    } else if (classlIst === 'tree') {
        e.target.className = 'circle blue blue_tree'
        
        CONTBLUE --
        ten.innerHTML = CONTBLUE;
        return
    }
    if (classlIst === 'blue_four') {
        e.target.className = 'circle blue four';
        selectAllAfter(circle_blue_all, 2, 'blue', 'tree')

        
        CONTBLUE = 4;
        ten.innerHTML = CONTBLUE;
        return
    } else if (classlIst === 'four') { 
        e.target.className = 'circle blue blue_four';
        
        CONTBLUE --
        ten.innerHTML = CONTBLUE;
        return
    }
    if (classlIst === 'blue_five') {
        e.target.className = 'circle blue five';
        selectAllAfter(circle_blue_all, 3, 'blue', 'four')
        
        CONTBLUE = 5;
        ten.innerHTML = CONTBLUE;
        return
    } else if (classlIst === 'five') { 
        e.target.className = 'circle blue blue_five';
        
        CONTBLUE --
        ten.innerHTML = CONTBLUE;
        return
    }
    if (classlIst === 'blue_six') {
        e.target.className = 'circle blue six';
        selectAllAfter(circle_blue_all, 4, 'blue', 'five')
        
        CONTBLUE = 6;
        ten.innerHTML = CONTBLUE;
        return
    } else if (classlIst === 'six') { 
        e.target.className = 'circle blue blue_six';
        
        CONTBLUE --
        ten.innerHTML = CONTBLUE;
        return
    }
    if (classlIst === 'blue_serven') {
        e.target.className = 'circle blue serven';
        selectAllAfter(circle_blue_all, 5, 'blue', 'six')

        
        CONTBLUE = 7;
        ten.innerHTML = CONTBLUE;
        return
    } else if (classlIst === 'serven') { 
        e.target.className = 'circle blue blue_serven';
        
        CONTBLUE --
        ten.innerHTML = CONTBLUE;
        return
    }
    if (classlIst === 'blue_eight') {
        e.target.className = 'circle blue eight';
        selectAllAfter(circle_blue_all, 6, 'blue', 'serven')
        
        CONTBLUE = 8
        ten.innerHTML = CONTBLUE;
        return
    } else if (classlIst === 'eight') { 
        e.target.className = 'circle blue blue_eight';
        
        CONTBLUE --
        ten.innerHTML = CONTBLUE;
        return
    }
    if (classlIst === 'blue_nine') {
        e.target.className = 'circle blue nine';
        selectAllAfter(circle_blue_all, 7, 'blue', 'eight')
        
        CONTBLUE = 9;
        ten.innerHTML = CONTBLUE;
        return
    } else if (classlIst === 'nine') { 
        e.target.className = 'circle blue blue_nine';
        
        CONTBLUE --
        ten.innerHTML = CONTBLUE;
        return
    }
})