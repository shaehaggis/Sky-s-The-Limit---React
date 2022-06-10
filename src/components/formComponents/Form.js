import CoffeeForm from "./CoffeeForm";
import BBQBurgerForm from "./BBQBurgerForm";
import React from "react";

class Form extends React.Component {
  formContent = () => {
    if (this.state.category === "coffee") return <CoffeeForm />;
    return <BBQBurgerForm />;
  };

  render() {
    return (
      <div>
        <form></form>
      </div>
    );
  }
}

export default Form;
