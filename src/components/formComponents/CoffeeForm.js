import React from "react";

class CoffeeForm extends React.Component {
  render() {
    return (
      <div>
        <form className="form-flex-coffee">
          <div className="form-section-title">Milk Type:</div>
          <div className="flex-milk-type">
            <div>
              <input defaultChecked type="radio" />
              <label>Full Milk</label>
            </div>
            <div>
              <input type="radio" />
              <label>Skim</label>
            </div>
            <div>
              <input type="radio" />
              <label>Almond</label>
            </div>
            <div>
              <input type="radio" />
              <label>Soy</label>
            </div>
            <div>
              <input type="radio" />
              <label>Oat</label>
            </div>
          </div>
          <div className="form-section-title">Additional Comments:</div>
          <textarea rows="6"></textarea>
          <div className="flex-confirm">
            <button className="cancel">Cancel</button>
            <button className="confirm">Confirm</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CoffeeForm;
