import React from "react";
import "../asset/all.css";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Jumbo = props => {
  return (
    <div>
      <Jumbotron className={props.css}>
        <h1 style={{ color: "red" }} className="display-3">
          {props.judul}
        </h1>
        <br />

        <Button color="primary" tag={Link} to="/">
          Oke
        </Button>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
