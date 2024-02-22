const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {
        progress.value = event.loaded / event.total;
    });

    xhr.upload.addEventListener('error', () => {
        console.log(`${xhr.response.error}`);
    }); 
		
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form);
	xhr.send(formData);
});
