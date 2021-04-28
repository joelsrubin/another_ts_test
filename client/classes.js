class Discount {
    constructor(isPercentage, amount) {
        this.isPercentage = isPercentage;
        this.amount = amount;
    }
    apply(article) {
        if (this.isPercentage) {
            article.price = article.price - (article.price * this.amount);
        }
        else {
            article.price = article.price - this.amount;
        }
        if (window) {
            console.log('Another discount applied');
        }
    }
}
const discount = new Discount(false, 10);
discount.apply({
    price: 39,
    vat: 0.2,
    title: 'Form Design Patterns'
});
let allProductsTwentyBucks = {
    isPercentage: false,
    amount: 20,
    apply(article) {
        article.price = 20;
    }
};
class TwentyPercentDiscount extends Discount {
    constructor() {
        super(true, 0.2);
    }
    apply(article) {
        if (article.price <= 40) {
            super.apply(article);
        }
    }
    isValidForDiscount(article) {
        return article.price <= 40;
    }
}
class DVD {
    constructor(title) {
        this.title = title;
        this.price = 9.99;
        this.vat = 0.2;
    }
}
class Book {
    constructor(title) {
        this.title = title;
        this.price = 39;
        this.vat = 0.2;
    }
}
let book = new Book('Art Direction on the Web');
discount.apply(book);
let dvd = new DVD('Contagion');
discount.apply(dvd);
console.log(book, dvd);
export {};
// interface ShopItem {
//   reviews: {
//     rating: number,
//     content: string
//   }[]
// }
