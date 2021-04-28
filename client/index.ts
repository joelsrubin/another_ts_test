//@ts-check
/** @typedef { import('./@types/types.d').ShipStorage } ShipStorage */
/** @typedef { import('./@types/types.d').StorageItem } StorageItem */

import { ShipStorage } from "./@types/types";
import { Article } from "./example-two";

const book: Article = {
  price: 29,
  vat: 0.2,
  title: 'Another book by Smashing Books'
}

const storage: ShipStorage = {
  max: undefined,
  items: []
};
Object.defineProperty(storage, 'max', {
  writable:
    false, value: 5000
});
let currentStorage = undefined;
function storageUsed() {
  if (currentStorage) {
    return currentStorage;
  }
  currentStorage = 0;
  for (let i = 0; i < storage.items.length; i++) {
    currentStorage += storage.items[i].weight;
  }
  return currentStorage;
}
function add(item) {
  if (storage.max - item.weight >= storageUsed()) {
    storage.items.push(item);
    currentStorage += item.weight;
  }
}