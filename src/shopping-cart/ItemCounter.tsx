interface Props {
  name: string;
  quantity: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
  let count = quantity;
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
      }}
    >
      <span style={{ width: 150 }}>{name}</span>
      <button onClick={() => console.log(`Click ${name}`)}>+ 1</button>
      <span>{count}</span>
      <button onClick={() => console.log(`Click ${name}`)}>- 1</button>
    </section>
  );
};

export default ItemCounter;
