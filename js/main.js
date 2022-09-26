class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }


    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, img: 'img/icons/notebook1.png' },
            { id: 2, title: 'Mouse', price: 20, img: 'img/icons/Mouse.png' },
            { id: 3, title: 'Keyboard', price: 200, img: 'img/icons/Keyboard.png' },
            { id: 4, title: 'Gamepad', price: 50, img: 'img/icons/Gamepad.png' },
        ];
    }

    getSum() {
        let sum = this.goods.reduce((acc, item) => acc + item.price, 0);
        console.log(sum);
    }


    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            //              block.innerHTML += item.render();
        }
    }

}


class ProductItem {

    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }

    render() {
        return `<div class="product-item">
                <img class='product-img' src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}


let list = new ProductList();
list.getSum();




class Cart {
    constructor(container = '.cart') {

    }

    addToCard() {
    }

    removeFromCart() {
    }

    render() {
    }
}


class CardItem {
    constructor(product) {

    }

    render() {

    }
}




// const products = [
//     { id: 1, title: 'Notebook', price: 2000, img: 'img/icons/notebook1.png' },
//     { id: 2, title: 'Mouse', price: 20, img: 'img/icons/Mouse.png' },
//     { id: 3, title: 'Keyboard', price: 200, img: 'img/icons/Keyboard.png' },
//     { id: 4, title: 'Gamepad', price: 50, img: 'img/icons/Gamepad.png' },
// ];
// //Функция для формирования верстки каждого товара
// //Добавить в выводе изображение
// const renderProduct = (item) => {
//     return `<div class="product-item">
//              <img class='product-img' src='${item.img}'>
//                 <h3>${item.title}</h3>
//                 <p>${item.price} $</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };
// const renderPage = (list = products) => {
//     const productsList = list.map(item => renderProduct(item)).join(' ');
//     console.log(productsList);
//     document.querySelector('.products').innerHTML = productsList;

// };

// renderPage();