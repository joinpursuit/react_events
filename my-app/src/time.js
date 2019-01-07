import React from "react";

class Times extends React.Component {
  constructor(props) {
    super(props);
    this.rat = 10;
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleTime}>Buy Time</button>
        <ul>
          <li>Amount: {this.props.time}</li>
          <li>Cost: 100</li>
          <li>Rate Increase: {this.rat}</li>
        </ul>
      </div>
    );
  }
}

export default Times;
