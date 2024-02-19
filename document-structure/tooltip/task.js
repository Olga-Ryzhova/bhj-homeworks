const hasTooltip = document.querySelectorAll('.has-tooltip');

 // создаем новый div
 const tooltipNew = document.createElement('div');
 // присваиваем ему класс
 tooltipNew.className = 'tooltip';

//добавляем элемент в разметку
 const body = document.querySelector('body');
 body.appendChild(tooltipNew);

// логика при клике
hasTooltip.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    
    // получаем title
        const title = link.getAttribute('title');
    
    // записываем условие для удаления и добавления подсказки
        if (tooltipNew.classList.contains('tooltip_active')) {
            tooltipNew.classList.remove('tooltip_active');
        } else {
            tooltipNew.classList.add('tooltip_active');
            tooltipNew.textContent = title;
        
        // отображение на странице
            let left = link.getBoundingClientRect().x;
            let top = link.getBoundingClientRect().y + link.getBoundingClientRect().height;
            tooltipNew.setAttribute('style', `left: ${left}px; top: ${top}px;`);
        }
    })
})

