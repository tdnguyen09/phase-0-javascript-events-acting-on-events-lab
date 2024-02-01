// Your code here
const dodger = document.getElementById('dodger');
function moveDodgerLeft(){
    const leftNumber = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumber, 10);
    if (left > 0){
        dodger.style.left = `${left -1}px`;
    }
}
function moveDodgerRight(){
    const rightNumber = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumber, 10);
    if (right < 360){
        dodger.style.left = `${right + 1}px`;
    }
}

document.addEventListener('keydown', function (e){
    if (e.key ===  'ArrowLeft'){
        moveDodgerLeft();
    }else if (e.key === 'ArrowRight'){
        moveDodgerRight();
    }

})