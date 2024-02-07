const rotatorCase = document.querySelectorAll('.rotator__case'); 
let count = 0;

setInterval(() => {
    rotatorCase.forEach((item, index) => {
        item.classList.toggle('rotator__case_active', count == index);
        
    })
    count++;   

    if (count === rotatorCase.length) {
        count = 0;
    }

    for (let i = 0; i < rotatorCase.length; i++) {
        const element = rotatorCase[i];
        element.style.color = element.getAttribute('data-color');
    }

}, 1000);




