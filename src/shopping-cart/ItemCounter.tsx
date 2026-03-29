import { useState } from "react";

// import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";

interface Props {
  name: string;
  quantity: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = (count: number) => setCount(count + 1);
  const handleSubstract = (count: number) => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <section
      className={styles["item-row"]}
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: 10,
      //   marginTop: 10,
      // }}
    >
      <span
        className={styles["item-text"]}
        style={{ color: count === 1 ? "red" : "black" }}
      >
        {name}
      </span>
      <button onClick={() => handleAdd(count)}>+ 1</button>
      <span>{count}</span>
      <button onClick={() => handleSubstract(count)}>- 1</button>
    </section>
  );
};

export default ItemCounter;
