import "../styles.css";
import ItemsList from "./ItemsList";
import items from "../data.json";
import FoodDrinkNav from "./FoodDrinkNav";
import Footer from "./Footer";
import React from "react";
import ShoppingCart from "./ShoppingCart";

class App extends React.Component {
  state = {
    foodDisplay: "block",
    drinkDisplay: "none",
    showFooter: "none",
    totalPrice: 0.0,
    quantity: 0,
    showMenu: "block",
    showCart: "none",
    cartlist: [],
  };

  backToMenu = () => {
    this.setState({ showCart: "none", showMenu: "block", showFooter: "fixed" });
  };

  viewCart = () => {
    this.setState({ showCart: "block", showMenu: "none", showFooter: "none" });
  };

  onDrinkClick = () => {
    this.setState({ foodDisplay: "none", drinkDisplay: "block" });
  };

  onFoodClick = () => {
    this.setState({ foodDisplay: "block", drinkDisplay: "none" });
  };

  render() {
    return (
      <main>
        <section style={{ display: this.state.showMenu }} id="menu">
          <ItemsList list={items.MostPopularitems} headerTitle="Most Popular" />
          <FoodDrinkNav
            foodClick={this.onFoodClick}
            drinkClick={this.onDrinkClick}
          />
          <section style={{ display: this.state.foodDisplay }} className="food">
            <ItemsList list={items.food.BBQ} headerTitle="BBQ" />
            <ItemsList list={items.food.Burger} headerTitle="Burgers" />
          </section>
          <section
            style={{ display: this.state.drinkDisplay }}
            className="drink"
          >
            <ItemsList list={items.drink.Coffee} headerTitle="Coffee" />
            <ItemsList list={items.drink.SoftDrink} headerTitle="Soft Drinks" />
          </section>
          <Footer
            style={{ display: this.state.showFooter }}
            currentPrice={this.state.totalPrice}
            currentQuant={this.state.quantity}
          />
        </section>
        <ShoppingCart
          style={{ display: this.state.showCart }}
          cartList={this.state.cartlist}
        />
      </main>
    );
  }
}

export default App;
