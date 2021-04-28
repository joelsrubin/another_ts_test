const addVAT = (price:number, vat:number = 0.2):number => {
  return price * (1 + vat)
}

const vatPrice = addVAT(30, 0.2)
const vatPriceWithDefault = addVAT(30);
const boom = addVAT(30);
let deliveryAddresses = [];
const selectDeliveryAddress = (addressOrIndex):string => {
  if (typeof addressOrIndex === 'number' && addressOrIndex < deliveryAddresses.length) {
    return deliveryAddresses[addressOrIndex]
  } else if (typeof addressOrIndex === 'string') {
    return addressOrIndex
  }
  return '';
}
export type Article = {
  title: string,
  price: number,
  vat: number,
  stock?: number,
  description?: string
}

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
}

const movie:Article = movBackup;

type ArticleStub = {
  price: number,
  vat: number,
  title: string
}

type Address = {
  city: string,
  zip: string,
  street: string,
  number: string
}

type Customer = {
  name: string,
  address: Address,
  dateOfBirth: Date
}

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
 }

 type Order = typeof defaultOrder

 function checkOrders(orders: Order[]) {
   let valid = true;
   for (let order of orders) {
     valid = valid && order.articles.length > 0
   }
   return valid
 }