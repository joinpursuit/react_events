import React from "react";

class Times extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <button onClick={this.props.handleTime}>Buy Time</button>
        <ul>
          <li>Amount: {this.props.time}</li>
          <li>Cost: 100</li>
          <li>Rate Increase: 10</li>
        </ul>
      </div>
    )
  }
}

export default Times
