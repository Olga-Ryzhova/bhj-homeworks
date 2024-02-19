const cartProducts = document.querySelector('.cart__products');

const product = document.querySelectorAll('.product');

const controlDec = document.querySelectorAll('.product__quantity-control_dec');
const controlInc = document.querySelectorAll('.product__quantity-control_inc');
const quantityValue =  document.querySelectorAll('.product__quantity-value');

const productAdd = document.querySelectorAll('.product__add');

product.forEach((item, index) => { 
    let counter = 1;
    
    controlInc[index].addEventListener('click', () => {
        if (counter < Infinity) {
            counter ++;
            quantityValue[index].textContent = counter; 
            return counter;
        }
    })
        
    controlDec[index].addEventListener('click', () => {
        if (counter !== 1) {
            counter --;
            quantityValue[index].textContent = counter; 
            return counter;
        }
    })
    
    productAdd[index].addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const img = item.children[1].getAttribute('src'); 

        const products = [...document.getElementsByClassName('cart__product')];
        const getProd = products.find(product => product.dataset.id == id);

        if (getProd) {
			let child = getProd.children[1];
			child.textContent = +child.textContent + counter;
		} else {
			cartProducts.insertAdjacentHTML('afterBegin', `
            <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${img}">
            <div class="cart__product-count">${counter}</div>
            </div>`);
		}

        counter = 1;
		quantityValue[index].textContent = counter;
		return counter;
	});
    
})

