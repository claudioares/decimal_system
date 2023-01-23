const sistem_number = document.querySelectorAll('.sistem_number span')
const circleOrange = document.querySelectorAll('#unity div');
const circleBlue = document.querySelectorAll('#ten div');
const circlePink = document.querySelectorAll('#hundred div');
const circleGreen = document.querySelectorAll('#thousand_unit div');


export function setMoveCircle(num, list, color) {

    num === 0 ? num === null : num === 0
    
    let arrCicleList = [...list];
    arrCicleList = arrCicleList.slice(0, num)

    arrCicleList.forEach((circle, index) => { 
        setClassCircleOrange(circle, index, color)
    })
}

function setClassCircleOrange(circle, index, color) {

    let cont = 0;
    while (cont <= index) {

        let setClassList = '';
        
        if (index === 0) setClassList = `circle ${color} one`
        if (index === 1) setClassList = `circle ${color} two`
        if (index === 2) setClassList = `circle ${color} tree`
        if (index === 3) setClassList = `circle ${color} four`
        if (index === 4) setClassList = `circle ${color} five`
        if (index === 5) setClassList = `circle ${color} six`
        if (index === 6) setClassList = `circle ${color} serven`
        if (index === 7) setClassList = `circle ${color} eight`
        if (index === 8) setClassList = `circle ${color} nine`

        circle.classList = setClassList;
        cont++;
    }

    return;
}

export function resetInitCircle(circleList, color) {
    
    circleList.forEach((circle, index) => { 
        if (index === 0) circle.classList = `circle ${color} ${color}_one`
        if (index === 1) circle.classList = `circle ${color} ${color}_two`
        if (index === 2) circle.classList = `circle ${color} ${color}_tree`
        if (index === 3) circle.classList = `circle ${color} ${color}_four`
        if (index === 4) circle.classList = `circle ${color} ${color}_five`
        if (index === 5) circle.classList = `circle ${color} ${color}_six`
        if (index === 6) circle.classList = `circle ${color} ${color}_serven`
        if (index === 7) circle.classList = `circle ${color} ${color}_eight`
        if (index === 8) circle.classList = `circle ${color} ${color}_nine`
    })
}

export function resetNumber() { 
        sistem_number[0].innerHTML = 0
        sistem_number[1].innerHTML = 0
        sistem_number[2].innerHTML = 0
        sistem_number[3].innerHTML = 0
}



export function resetAll() { 
    resetNumber();
    resetInitCircle(circleOrange, 'orange');
    resetInitCircle(circleBlue, 'blue');
    resetInitCircle(circlePink, 'pink');
    resetInitCircle(circleGreen, 'green');
}

export function continueCycleSum(circle) {
    let CONT = 0;
    if (
        circle.innerHTML !== 0
    ) { 
        CONT = circle.innerHTML;
    }
    return CONT;
}

export function selectAllAfter(circle, index, color, posisition) {


    if (posisition === 'two') {
        circle[0].classList = `circle ${color} one`
        circle[index].classList = `circle ${color} ${posisition}`
    }
    if (posisition === 'tree') {
        circle[0].classList = `circle ${color} one`
        circle[1].classList = `circle ${color} two`
        circle[index].classList = `circle ${color} ${posisition}`;
    }
    if (posisition === 'four') {
        circle[0].classList = `circle ${color} one`
        circle[1].classList = `circle ${color} two`
        circle[2].classList = `circle ${color} tree`
        circle[index].classList = `circle ${color} ${posisition}`
    }
    if (posisition === 'five') {
        circle[0].classList = `circle ${color} one`
        circle[1].classList = `circle ${color} two`
        circle[2].classList = `circle ${color} tree`
        circle[3].classList = `circle ${color} four`
        circle[index].classList = `circle ${color} ${posisition}`
    }
    if (posisition === 'six') {
        circle[0].classList = `circle ${color} one`
        circle[1].classList = `circle ${color} two`
        circle[2].classList = `circle ${color} tree`
        circle[3].classList = `circle ${color} four`
        circle[4].classList = `circle ${color} five`
        circle[index].classList = `circle ${color} ${posisition}`
    }
    if (posisition === 'serven') {
        circle[0].classList = `circle ${color} one`
        circle[1].classList = `circle ${color} two`
        circle[2].classList = `circle ${color} tree`
        circle[3].classList = `circle ${color} four`
        circle[4].classList = `circle ${color} five`
        circle[5].classList = `circle ${color} six`
        circle[index].classList = `circle ${color} ${posisition}`
    }
    if (posisition === 'eight') {
        circle[0].classList = `circle ${color} one`
        circle[1].classList = `circle ${color} two`
        circle[2].classList = `circle ${color} tree`
        circle[3].classList = `circle ${color} four`
        circle[4].classList = `circle ${color} five`
        circle[5].classList = `circle ${color} six`
        circle[6].classList = `circle ${color} serven`
        circle[index].classList = `circle ${color} ${posisition}`
    }
    if (posisition === 'nine') {
        circle[0].classList = `circle ${color} one`
        circle[1].classList = `circle ${color} two`
        circle[2].classList = `circle ${color} tree`
        circle[3].classList = `circle ${color} four`
        circle[4].classList = `circle ${color} five`
        circle[5].classList = `circle ${color} six`
        circle[6].classList = `circle ${color} serven`
        circle[7].classList = `circle ${color} eight`
        circle[index].classList = `circle ${color} ${posisition}`
    }

    circle[index].classList = `circle ${color} ${posisition}`
    
}
