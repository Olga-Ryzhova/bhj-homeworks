// Задача 1
const time = function() {
    const timerCount = document.getElementById('timer');
    timerCount.textContent -= 1;  

    if (timerCount.textContent <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(interval); 
    }
}

let interval = setInterval(time, 1000);





