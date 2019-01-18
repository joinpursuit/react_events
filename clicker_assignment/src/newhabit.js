import React from "react";

class NewHabit extends React.Component {
  constructor(props) {
    super(props)
    this.cost = "1/2 of total"
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleNewHabit}>Buy Good Habit</button>
        <ul>
          <li>Amount: {this.props.amount}</li>
          <li>Cost: {this.cost}</li>
          <li>Rate Increase: 10%</li>
        </ul>
      </div>
    )
  }
}

export default NewHabit
