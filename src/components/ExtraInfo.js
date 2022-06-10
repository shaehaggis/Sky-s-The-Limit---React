import BBQBurgerForm from "./formComponents/BBQBurgerForm";
import CoffeeForm from "./formComponents/CoffeeForm";
import React from "react";

class ExtraInfo extends React.Component {
  state = {
    category: this.props.category,
    currentQuantity: 1,
    totalQuantity: this.props.quantity,
    headerTitle: "Extra Information",
  };

  componentDidMount() {
    if (this.state.totalQuantity > 1) {
      this.setState({
        headerTitle: `Extra Information ${this.state.currentQuantity}/${this.state.totalQuantity}`,
      });
    }
  }

  formContent = () => {
    if (this.state.category === "coffee") return <CoffeeForm />;
    return <BBQBurgerForm />;
  };

  render() {
    return (
      <section className="extra-info">
        <div className="extra-info-heading">{this.state.headerTitle}</div>
        {this.formContent()}
      </section>
    );
  }
}

export default ExtraInfo;
