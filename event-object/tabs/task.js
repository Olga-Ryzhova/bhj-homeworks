const tabActive = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');


tabActive.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabActive.forEach(tab => tab.classList.remove('tab_active'));
        tab.classList.add('tab_active');
        tabContent.forEach(text => text.classList.remove('tab__content_active'));
        tabContent[index].classList.add('tab__content_active');
    })
});

