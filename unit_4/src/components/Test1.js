import React from "react";

class Test1 extends React.Component {
  constructor(props) {
    console.clear();
    console.log("constructor");
    console.log(props);
    super();
    this.state = {
      s1: 0,
    };
  }
  
  ButtonHandler = () => {
    let val = this.state.s1;
    val++;
    this.setState({ s1: val });
  };

  static getDrivedStateFromProps(props, state) {
    console.log("get drived state");
    return null;
    // return ({'s1' : props.arg})
  }

  render() {
    console.log("render 1");

    return (
      <>
        {console.log("render 2")}
        <div>
          <button onClick={this.ButtonHandler}>Push button</button>
        </div>
        <div>{this.state.s1}</div>
      </>
    );
  }
}

export default Test1;
