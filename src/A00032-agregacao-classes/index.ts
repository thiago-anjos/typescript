//agregação e composição são tipos de associacao entre objetos
// o carro precisar de roda para andar é agregação, igual um carrinho de compras que precisa ter produtos para ser um carrinho de produtos

export class ShoppingCart {
  private readonly products: Product[] = [];

  addProduct(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  showProducts(): void {
    console.log(this.products);
  }

  amount(): number {
    const amount = this.products.length;
    console.log(amount);
    return amount;
  }

  total(): number {
    const totalPrice = this.products.reduce(
      (sum, product) => sum + product.price,
      0,
    );
    console.log(totalPrice);
    return totalPrice;
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const smartPhone = new Product('Smartphone', 14.99);
const bag = new Product('Mochila', 2000);
const Pen = new Product('Caneta', 5);

const shoppingCartAmericanas = new ShoppingCart();
shoppingCartAmericanas.addProduct(smartPhone);
shoppingCartAmericanas.addProduct(bag);
shoppingCartAmericanas.addProduct(Pen);
shoppingCartAmericanas.showProducts();
shoppingCartAmericanas.amount();
shoppingCartAmericanas.total();

//Uma classe precisa de outra classe para funcionar corretamente ( agregação ) mas ambas podem viver separadamente
