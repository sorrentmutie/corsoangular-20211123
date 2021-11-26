export interface Product {
  Name: string,
  id: number,
  Available: boolean,
  Price: number,
  AvailabilityDate: Date,
  Category: Category,
  Categories: Category[]
}

export interface Category {
  Id: number,
  Name: string
}


