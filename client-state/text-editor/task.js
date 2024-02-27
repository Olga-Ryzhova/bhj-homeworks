let editor = document.getElementById('editor');
let reset = document.getElementById('reset');

// записываем данные
editor.addEventListener('input', () => {
    localStorage.setItem('getEditor', editor.value)
});

// получаем данные
editor.value = localStorage.getItem('getEditor');

// очищаем поле
reset.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('getEditor')
})
 
