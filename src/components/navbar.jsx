import React from "react";
import "../asset/all.css";
import { Navbar } from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "red", color: "white" }}
          light
          expand="md"
        >
          <h1 className="jd" href="/">
            {this.props.subjudul}
          </h1>
        </Navbar>
      </div>
    );
  }
}
