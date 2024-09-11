import React from "react";

class ClassPropsComponent extends React.Component {
  render() {
    return (
    <div>
      <h2>{this.props.message}</h2>
    </div>
    )
  }
}

export default ClassPropsComponent;