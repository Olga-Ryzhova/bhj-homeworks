const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close')

function getModal() {
// при загрузке страницы появляется модальное окно
modal.classList.add('modal_active');

// при нажатии на знак крестика закрываем модальное окно
modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modal=true';
})
}

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts
      .pop()
      .split(";")
      .shift();
    }
}
 
window.addEventListener('load', () => {
    if (!getCookie('modal')) {
        getModal();
    } 
})