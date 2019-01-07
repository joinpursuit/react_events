import React from "react";

class Determination extends React.Component {
  constructor(props) {
    super(props);
    this.rate = 1;
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleDetermination}>
          Buy Determination
        </button>
        <ul>
          <li>Amount: {this.props.amount}</li>
          <li>Cost: 10</li>
          <li>Rate Increase: {this.rate}</li>
        </ul>
      </div>
    );
  }
}

export default Determination;
