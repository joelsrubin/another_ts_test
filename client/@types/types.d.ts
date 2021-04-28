export type StorageItem = {
  weight: number
}

export type ShipStorage = {
  max: number | undefined,
  items: StorageItem[]
}

export interface ShopItem {
   title: string;
 price: number;
 vat: number;
 stock?: number;
 description?: string;
}