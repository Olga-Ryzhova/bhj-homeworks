// Изменение шрифта
const fontSize = document.querySelectorAll('.font-size'); 
const book = document.querySelector('.book');

fontSize.forEach((item) => {
    const size = item.getAttribute('data-size');

    item.addEventListener('click', (event) => {
        event.preventDefault();
        fontSize.forEach(f => f.classList.remove('font-size_active'));
        item.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');
            
        if (size === 'small') {
            book.classList.add('book_fs-small'); 
        }; 
        if (size === 'big') {
            book.classList.add('book_fs-big'); 
        }; 
    });    
    
});


// Изменение текста
const colorText = document.querySelectorAll('.color'); 

colorText.forEach((item) => {
    const colorsText = item.getAttribute('data-text-color');
    
    item.addEventListener('click', (event) => {
        event.preventDefault();
        
        colorText.forEach(f => f.classList.remove('color_active'));
        item.classList.add('color_active');

        book.classList.remove('text_color_black', 'text_color_gray', 'text_color_whitesmoke');

        if (colorsText === 'black') {
            book.classList.add('text_color_black'); 
        }; 
        
        if (colorsText === 'gray') {
            book.classList.add('text_color_gray'); 
        }; 

        if (colorsText === 'whitesmoke') {
            book.classList.add('text_color_whitesmoke'); 
        }; 
    });

});

// Изменение фона
const color = document.querySelectorAll('.color'); 
color.forEach((item) => {
    const colors = item.getAttribute('data-bg-color');
    
    item.addEventListener('click', (event) => {
        event.preventDefault();

        color.forEach(f => f.classList.remove('color_active'));
        item.classList.add('color_active');

        
        book.classList.remove('bg_color_black', 'bg_color_gray', 'bg_color_white');

        if (colors === 'black') {
            book.classList.add('bg_color_black'); 
        }; 

        if (colors === 'gray') {
            book.classList.add('bg_color_gray'); 
        }; 

        if (colors === 'white') {
            book.classList.add('bg_color_white'); 
        };
    });
});


