interface Product {
  price: number;
  name: string;
  quantity: number;
  category: string;
}

const printProduct = (product: Product): void => {
  console.log(`${product.name} - ${product.price}`)
}

