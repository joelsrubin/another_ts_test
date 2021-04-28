import { ShopItem } from "./@types/types";
import { Article } from "./example-two";


class Discount {
  isPercentage: boolean
  amount: number
  constructor(isPercentage: boolean, amount: number) {
    this.isPercentage = isPercentage;
    this.amount = amount;
  }


  apply(article:Article) {
    if(this.isPercentage) {
      article.price = article.price - (article.price * this.amount)
    } else {
      article.price = article.price - this.amount
    }


    if (window) {
      console.log('Another discount applied')
    }
  }
}

const discount: Discount = new Discount(false, 10)
discount.apply({
  price: 39,
  vat: 0.2,
  title: 'Form Design Patterns'
})

let allProductsTwentyBucks: Discount = {
  isPercentage: false,
  amount: 20,
  apply(article) {
    article.price = 20
  }
}

class TwentyPercentDiscount extends Discount {
  constructor() {
    super(true, 0.2)
  }
  apply(article: Article) {
    if(article.price <= 40) {
      super.apply(article)
    }
  }
  isValidForDiscount(article:Article) {
    return article.price <= 40
  }
}

class DVD implements ShopItem {
  title: string;
  price: number;
  vat: number;
  constructor(title: string) {
    this.title = title;
    this.price = 9.99;
    this.vat = 0.2;
  }
}

class Book implements Article {
  title: string;
  price: number;
  vat: number;

  constructor(title: string) {
    this.title = title;
    this.price = 39;
    this.vat = 0.2;
  }
}

let book = new Book('Art Direction on the Web');
discount.apply(book)

let dvd = new DVD('Contagion');
discount.apply(dvd);

console.log(book, dvd)

// interface ShopItem {
//   reviews: {
//     rating: number,
//     content: string
//   }[]
// }
