const addVAT = (price, vat = 0.2) => {
    return price * (1 + vat);
};
const vatPrice = addVAT(30, 0.2);
const vatPriceWithDefault = addVAT(30);
const boom = addVAT(30);
let deliveryAddresses = [];
const selectDeliveryAddress = (addressOrIndex) => {
    if (typeof addressOrIndex === 'number' && addressOrIndex < deliveryAddresses.length) {
        return deliveryAddresses[addressOrIndex];
    }
    else if (typeof addressOrIndex === 'string') {
        return addressOrIndex;
    }
    return '';
};
// const movie: Article = {
//   title: 'Helvetica',
//   price: 6.66,
//   vat: 0.19,
//   stock: 1000,
//   description: '90 minutes of gushing about Helvetica'
// }
const movBackup = {
    title: 'Helvetica',
    price: 6.66,
    vat: 0.19,
    stock: 1000,
    description: '90 minutes of gushing about Helvetica',
    rating: 5
};
const movie = movBackup;
// type Order = {
//   articles: ArticleStub[],
//   customer: Customer
// }
const defaultOrder = {
    articles: [
        {
            price: 1200.50,
            vat: 0.2,
            title: 'Macbook Air Refurbished - 2013'
        },
        {
            price: 9,
            vat: 0,
            title: 'I feel smashing subscription'
        }
    ],
    customer: {
        name: 'Fritz Furball',
        address: {
            city: 'Smashing Hill',
            zip: '90210',
            street: 'Whisker-ia Lane',
            number: '1337'
        },
        dateOfBirth: new Date(2006, 9, 1)
    }
};
function checkOrders(orders) {
    let valid = true;
    for (let order of orders) {
        valid = valid && order.articles.length > 0;
    }
    return valid;
}
export {};
