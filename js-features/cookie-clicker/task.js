// Задача 1
const cookies = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
const speed =  document.getElementById('clicker__speed');

function changeSize() {
    cookies.width = 250;
    cookies.height = 200;
    clicker.textContent++;    
};
cookies.onclick = changeSize;


// Задача 2
function clickSpeed() {
    const start = new Date().getTime();
    changeSize()
    const end = new Date().getTime();
    speed.textContent = end / start;
}
cookies.onclick = clickSpeed;












