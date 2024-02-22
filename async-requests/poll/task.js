const pollTitle = document.getElementById('poll__title');
const pollAnswer = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = "json";
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let poll = xhr.response.data; 
        console.log(poll);

        pollTitle.innerHTML =  xhr.response.data.title;

        let pollArray = xhr.response.data.answers; 

        for (let pol in pollArray) { 
            pollAnswer.insertAdjacentHTML('afterBegin', `<button class="poll__answer">${pollArray[pol]}</button>`);            
        };

        const button = document.querySelector('.poll__answer');
        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!')
        });
    }
})