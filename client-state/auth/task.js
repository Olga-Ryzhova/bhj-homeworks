const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

signin.classList.add('signin_active');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
  
    xhr.addEventListener('load', () => {   
        let user =  xhr.response;
        localStorage.setItem('user_id', user.user_id);
        
        console.log(user); 
        if (user.success === false) {
            alert('Неверный логин/пароль');
        } else if (user.success === true) {
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            welcome.textContent += user.user_id;    
        }           
    })
   
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
	xhr.send(formData);

    const forms = event.currentTarget;
    forms.reset();
});

window.addEventListener('load', () => {
    const user = localStorage.getItem('user_id');
    if (user === 'undefined') {
        welcome.classList.remove('welcome_active');
    } else if (user) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        welcome.textContent += user;    
    } else {
        return;
    }
});


 





