import React from "react";

class ClassStateComponent extends React.Component {
  state = { count: 0 };

  updateIncrementState = () => this.setState({ count: this.state.count + 2 });
  updateDecrementState = () => this.setState({ count: this.state.count - 2 });

  render() {
    return (
      <div>
        <h3>Class State Component</h3>
        <button onClick={this.updateIncrementState}>+2</button>
        <button onClick={this.updateDecrementState}>-2</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
export default ClassStateComponent;
