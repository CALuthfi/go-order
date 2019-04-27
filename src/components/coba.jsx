import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Card from "./card";

class Body extends Component {
  state = {
    situs: [
      {
        link: "/about",

        nama: "Go-Food",
        gambar:
          "https://www.goodnewsfromindonesia.id/uploads/post/large-61658247234-go-food-846971cd9193ffd74180a532f479cdfe.jpg"
      },
      {
        link: "/about",

        nama: "Go-Jek",
        gambar:
          "https://media.tabloidbintang.com/files/thumb/9f231ee9fbd603871b099329087368a4.jpg/745"
      },
      {
        link: "/about",

        nama: "Go-Grab",
        gambar:
          "https://www.grab.com/id/wp-content/uploads/sites/9/2018/04/Grab-logo-social.png"
      },
      {
        link: "/about",

        nama: "Go-Mall",
        gambar:
          "https://images-platform.99static.com/R939Cixq5B0hz2nE_nRQZfxX-rw=/597x353:1403x1159/500x500/top/smart/99designs-contests-attachments/94/94411/attachment_94411084"
      }
    ]
  };

  render() {
    return (
      <div>
        <Row>
          {this.state.situs.map(item => (
            <Col xs="6">
              <Card gambar={item.gambar} name={item.nama} link={item.link} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Body;
