const revealText = document.querySelectorAll('.reveal');
         
function isVivible(el) {
    const {top, bottom} = el.getBoundingClientRect();

    if (bottom < 0 || top > window.innerHeight) {
        return false
    } 
    
    return true;
}

window.addEventListener('scroll', () => {
    revealText.forEach((element) => {
        if (isVivible(element) === true) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    })
   
});



        