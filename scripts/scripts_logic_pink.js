const circle_pink = document.querySelector('#hundred');
const circle_pink_all = document.querySelectorAll('#hundred div');
const one_hundred = document.querySelector('.cen')
import {
    continueCycleSum,
    selectAllAfter
} from './functionsAll.js';

let CONTPINK = 0;

circle_pink.addEventListener('click', (e) => { 

    CONTPINK = continueCycleSum(one_hundred);

    const classlIst = e.target.classList[2];


    if (classlIst === 'pink_one') {
        e.target.className = 'circle pink  one';
        
        CONTPINK ++
        one_hundred.innerHTML = CONTPINK;
        return
    } else if (classlIst === 'one') {
        e.target.className = 'circle pink pink_one';

        CONTPINK --
        one_hundred.innerHTML = CONTPINK;
        return
    };

    if (classlIst === 'pink_two') {
        e.target.className = 'circle pink two';
        selectAllAfter(circle_pink_all, 0, 'pink', 'one')
        
        CONTPINK = 2;
        one_hundred.innerHTML = CONTPINK;
        return
    } else if (classlIst === 'two') {
        e.target.className = 'circle pink pink_two';
        
        CONTPINK--;
        one_hundred.innerHTML = CONTPINK;
        return
    }

    if (classlIst === 'pink_tree') {
        e.target.className = 'circle pink tree'
        selectAllAfter(circle_pink_all, 1, "pink", 'two')

        CONTPINK = 3;
        one_hundred.innerHTML = CONTPINK;
        return
    } else if (classlIst === 'tree') {
        e.target.className = 'circle pink pink_tree'
        
        CONTPINK--;
        one_hundred.innerHTML = CONTPINK;
        return
    }

    if (classlIst === 'pink_four') {
        e.target.className = 'circle pink four';
        selectAllAfter(circle_pink_all, 2, "pink", 'tree')

        CONTPINK = 4;
        one_hundred.innerHTML = CONTPINK;
        return
    } else if (classlIst === 'four') { 
        e.target.className = 'circle pink pink_four';
        
        CONTPINK--;
        one_hundred.innerHTML = CONTPINK;
        return
    }

    if (classlIst === 'pink_five') {
        e.target.className = 'circle pink five';
        selectAllAfter(circle_pink_all, 3, "pink", 'four')
        
        CONTPINK = 5;
        one_hundred.innerHTML = CONTPINK;
        return
    } else if (classlIst === 'five') { 
        e.target.className = 'circle pink pink_five';
        
        CONTPINK--;
        one_hundred.innerHTML = CONTPINK;
        return
    }

    if (classlIst === 'pink_six') {
        e.target.className = 'circle pink six';
        selectAllAfter(circle_pink_all, 4, "pink", 'five')
        
        CONTPINK = 6;
        one_hundred.innerHTML = CONTPINK;
        return
    } else if (classlIst === 'six') { 
        e.target.className = 'circle pink pink_six';
        
        CONTPINK--;
        one_hundred.innerHTML = CONTPINK;
        return
    }

    if (classlIst === 'pink_serven') {
        e.target.className = 'circle pink serven';
        selectAllAfter(circle_pink_all, 5, "pink", 'six')
        
        CONTPINK = 7;
        one_hundred.innerHTML = CONTPINK;
        return
    } else if (classlIst === 'serven') { 
        e.target.className = 'circle pink pink_serven';
        
        CONTPINK--;
        one_hundred.innerHTML = CONTPINK;
        return
    }

    if (classlIst === 'pink_eight') {
        e.target.className = 'circle pink eight';
        selectAllAfter(circle_pink_all, 6, "pink", 'serven')
        
        CONTPINK = 8;
        one_hundred.innerHTML = CONTPINK;
        return
    } else if (classlIst === 'eight') { 
        e.target.className = 'circle pink pink_eight';
        
        CONTPINK--;
        one_hundred.innerHTML = CONTPINK;
        return
    }

    if (classlIst === 'pink_nine') {
        e.target.className = 'circle pink nine';
        selectAllAfter(circle_pink_all, 7, "pink", 'eight')
        
        CONTPINK = 9;
        one_hundred.innerHTML = CONTPINK;
        return
    } else if (classlIst === 'nine') { 
        e.target.className = 'circle pink pink_nine';
        
        CONTPINK--;
        one_hundred.innerHTML = CONTPINK;
        return
    }
})