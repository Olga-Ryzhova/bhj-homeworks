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

        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

    // Такой метод рабочий, но кода много
        // if (colorsText === 'black') {
        //     book.classList.add('book_color-black'); 
        // }; 
        
        // if (colorsText === 'gray') {
        //     book.classList.add('book_color-gray'); 
        // }; 

        // if (colorsText === 'whitesmoke') {
        //     book.classList.add('book_color-whitesmoke'); 
        // }; 
        
    // Тоже код рабочий, но кода меньше
        book.classList.add(`book_color-${colorsText}`); 
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

        
        book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

    // Такой метод рабочий, но кода много
        // if (colors === 'black') {
        //     book.classList.add('book_bg-black'); 
        // }; 

        // if (colors === 'gray') {
        //     book.classList.add('book_bg-gray'); 
        // }; 

        // if (colors === 'white') {
        //     book.classList.add('book_bg-white'); 
        // };

    // Тоже код рабочий, но кода меньше
        book.classList.add(`book_bg-${colors}`);
    });
});


