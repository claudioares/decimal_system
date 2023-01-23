const circle_orange = document.querySelector('#unity');
const circle_orange_all = document.querySelectorAll('#unity div');
const unity = document.querySelector('.uni')
import {
    continueCycleSum,
    selectAllAfter
} from './functionsAll.js'; 


let CONTORANGE = 0;


circle_orange.addEventListener('click', (e) => { 

    CONTORANGE = continueCycleSum(unity)
    
    const classlIst = e.target.classList[2];


    if (classlIst === 'orange_one') {
        e.target.className = 'circle orange one';

        CONTORANGE ++
        unity.innerHTML = CONTORANGE;
        return
    } else if (classlIst === 'one') {
        e.target.className = 'circle orange orange_one';

        CONTORANGE --
        unity.innerHTML = CONTORANGE;
        return
    };

    if (classlIst === 'orange_two') {
        e.target.className = 'circle orange two';
        selectAllAfter(circle_orange_all, 0, 'orange', 'one')
        
        CONTORANGE = 2;
        unity.innerHTML = CONTORANGE;
        return
    } else if (classlIst === 'two') {
        e.target.className = 'circle orange orange_two';
        
        CONTORANGE --
        unity.innerHTML = CONTORANGE;
        return
    }
    if (classlIst === 'orange_tree') {
        e.target.className = 'circle orange tree'
        selectAllAfter(circle_orange_all, 1, 'orange', 'two')
        
        CONTORANGE = 3;
        unity.innerHTML = CONTORANGE;
        return
    } else if (classlIst === 'tree') {
        e.target.className = 'circle orange orange_tree'
        
        CONTORANGE --
        unity.innerHTML = CONTORANGE;
        return
    }
    if (classlIst === 'orange_four') {
        e.target.className = 'circle orange four';
        selectAllAfter(circle_orange_all, 2, 'orange', 'tree')
        
        CONTORANGE = 4;
        unity.innerHTML = CONTORANGE;
        return
    } else if (classlIst === 'four') { 
        e.target.className = 'circle orange orange_four';
        
        CONTORANGE --
        unity.innerHTML = CONTORANGE;
        return
    }
    if (classlIst === 'orange_five') {
        e.target.className = 'circle orange five';
        selectAllAfter(circle_orange_all, 3, 'orange', 'four')
        
        CONTORANGE = 5;
        unity.innerHTML = CONTORANGE;
        return
    } else if (classlIst === 'five') { 
        e.target.className = 'circle orange orange_five';
        
        CONTORANGE --
        unity.innerHTML = CONTORANGE;
        return
    }
    if (classlIst === 'orange_six') {
        e.target.className = 'circle orange six';
        selectAllAfter(circle_orange_all, 4, 'orange', 'five')
        
        CONTORANGE = 6;
        unity.innerHTML = CONTORANGE;
        return
    } else if (classlIst === 'six') { 
        e.target.className = 'circle orange orange_six';
        
        CONTORANGE --
        unity.innerHTML = CONTORANGE;
        return
    }
    if (classlIst === 'orange_serven') {
        e.target.className = 'circle orange serven';
        selectAllAfter(circle_orange_all, 5, 'orange', 'six')
        
        CONTORANGE = 7;
        unity.innerHTML = CONTORANGE;
        return
    } else if (classlIst === 'serven') { 
        e.target.className = 'circle orange orange_serven';
        
        CONTORANGE --
        unity.innerHTML = CONTORANGE;
        return
    }
    if (classlIst === 'orange_eight') {
        e.target.className = 'circle orange eight';
        selectAllAfter(circle_orange_all, 6, 'orange', 'serven')
        
        CONTORANGE = 8;
        unity.innerHTML = CONTORANGE;
        return
    } else if (classlIst === 'eight') { 
        e.target.className = 'circle orange orange_eight';
        
        CONTORANGE --
        unity.innerHTML = CONTORANGE;
        return
    }
    if (classlIst === 'orange_nine') {
        e.target.className = 'circle orange nine';
        selectAllAfter(circle_orange_all, 7, 'orange', 'eight')
        
        CONTORANGE = 9;
        unity.innerHTML = CONTORANGE;
        return
    } else if (classlIst === 'nine') { 
        e.target.className = 'circle orange orange_nine';
        
        CONTORANGE --
        unity.innerHTML = CONTORANGE;
        return
    }
})
