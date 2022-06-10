import React from "react";
import MenuItem from "./MenuItem";

const ItemsList = (props) => {
  const items = props.list.map(({ id, name, imageSrc, price }) => {
    return (
      <MenuItem key={id} itemName={name} imageSrc={imageSrc} price={price} />
    );
  });

  return (
    <section className="container">
      <h2>{props.headerTitle}</h2>
      {items}
    </section>
  );
};

export default ItemsList;
