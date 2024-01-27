// Задача 1
const cookies = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
const speed =  document.getElementById('clicker__speed');

cookie.onclick = function() {
    let clicks = clicker.textContent++;
    if (clicks % 2 == 0) {
        cookies.width = 150;
    } else {
        cookies.width = 200;
    }
}














