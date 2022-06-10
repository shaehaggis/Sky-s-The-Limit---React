import AddButton from "./AddButton";
import QuantityCounter from "./QuantityCounter";
import ExtraInfo from "./ExtraInfo";
import React from "react";

const MenuItem = (props) => {
  return (
    <section className="menu-item">
      <section className="flex-container">
        <div className="image-container">
          <img alt={props.itemName} src={props.imageSrc} />
        </div>
        <div className="item-info-container">
          <div className="price-container">
            <div className="price" style={{ fontWeight: 800 }}>
              ${props.price}
            </div>
          </div>
        </div>
        <div className="final-section">
          <div className="item-name-container">
            <div className="item-name">{props.itemName}</div>
          </div>
          <QuantityCounter />
          <div className="button-container">
            {/* soft drinks do not have a form attached */}
            <AddButton isSoftDrink="false" />
          </div>
        </div>
      </section>
      <ExtraInfo category="coffee" />
    </section>
  );
};

export default MenuItem;
