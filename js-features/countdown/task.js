// Задача 1
const time = function() {
    const timerCount = document.getElementById('timer');
    timerCount.textContent -= 1;  
}

let interval = setInterval(time, 1000);
setTimeout(() => {
    clearInterval(interval); 
    alert('Вы победили в конкурсе!');
}, 60000);




