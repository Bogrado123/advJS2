class Products {
    data = [];
    products = [];
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector);
        this._fetchData();
        this._render();
    }

    _fetchData() {
        this.data = [
            {
                title: 'Name 1',
                id: 1,
                imgSrc: 'img/catprod_1.jpg',
                price: 2000


    },
            {
                title: 'Name 2',
                id: 2,
                price: 200,
                imgSrc: 'img/catprod_2.jpg'
    },
            {
                title: 'Name 3',
                id: 3,
                imgSrc: 'img/catprod_3.jpg',
                price: 100

    },
            {
                title: 'Name 4',
                id: 4,
                imgSrc: 'img/catprod_4.jpg',
                price: 87

    }
];
    }

    _render() {
        for (let data of this.data) {
            const product = new ProductItem(data);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
    CatalogSum() {
        let sum = 0;

        for (let product of this.products) {
            sum += product.price
        }
        return sum;
    }
}

class ProductItem {
    title = '';
    price = 0;
    id = 0;
    img = '';

    constructor(product) {
        ({
            title: this.title,
            id: this.id,
            imgSrc: this.imgSrc,
            price: this.price,
        } = product);
    }

    render() {
        return `<div class="product-wrap">
                    <div class="product-item">
                                        <img src="${this.imgSrc}" alt="${this.id}">
                                        <div class="product-buttons">
                                            <a href="#" class="button"> <i class="fas fa-shopping-cart"></i>Add to Cart</a>
                                        </div>
                                    </div>
                                    <div class="product-title">
                                        <a class="prName" href="#">${this.title}</a>
                                        <span class="product-price">${this.price}$</span>
                                    </div>
                                </div>`
    }
}

class Cart { // класс корзины
    constructor() {}
    addToCart() {} // метод добавления товара в корзину
    removeFormCart() {} // метод удаления товара из корзины
    totalPrice() {} // медот подсчета итоговой стоимости
    render() {}
}

class CartItem { // класс товара корзины
    title = '';
    price = 0;
    id = 0;
    img = '';
    quantity = 0; // добавил количество товара, помимо конструктора и рендера не совсем понимаю, что еще можно добавить

    constructor() {}
    render() {}
}









const list = new Products('.productWraps');
console.log(list.CatalogSum());
