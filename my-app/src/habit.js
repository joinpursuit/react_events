import React from "react";

class GoodHabit extends React.Component {
  constructor(props) {
    super(props);
    this.cost = "1/2 of total";
  }
  render() {
    return (
      <div>
        <button onClick={this.props.handleHabit}> Buy Good Habbits</button>
        <ul>
          <li>Amount: {this.props.habAmount} </li>
          <li>Cost: {this.cost} </li>
          <li>Rate Increase: 10%</li>
        </ul>
      </div>
    );
  }
}

export default GoodHabit;
