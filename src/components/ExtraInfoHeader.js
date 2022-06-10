import React from "react";

class ExtraInfoHeader extends React.Component {
  render() {
    if (this.props.quantity === 0) {
      return <h2 className="extra-info-heading">Extra Information</h2>;
    } else {
      return <h2 className="extra-info-heading">{/* How to ? */}</h2>;
    }
  }
}

export default ExtraInfoHeader;
