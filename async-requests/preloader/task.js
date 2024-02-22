const item = document.querySelector('.item');
const loader = document.getElementById('loader');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json";
xhr.send();



xhr.addEventListener('readystatechange', () => {
    loader.classList.remove('loader_active'); 
    if (xhr.readyState === xhr.DONE) {
        let currency = xhr.response.response.Valute; 

        for (let cur in currency) {
            item.insertAdjacentHTML('afterBegin', `
            <div class="item__code">${currency[cur].CharCode}</div>
            <div class="item__value">${currency[cur].Value}</div>
            <div class="item__currency">руб.</div>`);
        }; 
    }
})


