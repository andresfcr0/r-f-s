import ItemCounter from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {
    productName: "Nintendo",
    quantity: 1,
  },
  {
    productName: "PS5",
    quantity: 2,
  },
  { productName: "Xbox", quantity: 3 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}

      {/* <ItemCounter name="Nintendo" quantity={1} />
      <ItemCounter name="PS5" quantity={1} />
      <ItemCounter name="Xbox" quantity={11} /> */}
    </>
  );
}
