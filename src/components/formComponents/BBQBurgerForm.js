import React from "react";

class BBQBurgerForm extends React.Component {
  render() {
    return (
      <div>
        <form className="form-flex-bb">
          <div className="form-section-title">Add Ingredients:</div>
          <div className="add-ing"></div>
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

export default BBQBurgerForm;
