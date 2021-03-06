import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import Cabang from "./cabang";
class Call extends Component {
  state = {
    malls: [
      {
        id: 1,
        gambar:
          "http://static1.squarespace.com/static/542f26d1e4b0d66c87d2d963/t/569e8ca7df40f33e106c868b/1547761427961/?format=1500w",
        toko: "kedai Cafe",
        jalan: "Jln.Gunung Pati semarang"
      },
      {
        id: 2,
        gambar: "https://pbs.twimg.com/profile_images/1287550758/logo_rc.jpg",
        toko: "Roket Chiken",
        jalan: "Jln.Ngaliyan semarang"
      },
      {
        id: 3,
        gambar:
          "http://1.bp.blogspot.com/-nDSusRrN9E4/Wb9KT3C0ZlI/AAAAAAAAC_E/iG6aP93M08QX1qMu9pEY600hBvfI52UPgCK4BGAYYCw/s1600/SeafoodRestaurant.png",
        toko: "Sea food",
        jalan: "Jln.Ungaran semarang"
      },
      {
        id: 4,
        gambar:
          "https://b.zmtcdn.com/data/pictures/1/18927771/d24ff7ac258e27c9d704556b06387e6a_featured_v2.jpg",
        toko: "Cafe sevent",
        jalan: "Jln.Mijen semarang"
      },

      {
        id: 5,
        gambar:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f086677-96c2-4fa8-b643-4cef7a18fbdb/d4p1k3z-fab83a71-8383-4f79-a113-160da1555a33.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmMDg2Njc3LTk2YzItNGZhOC1iNjQzLTRjZWY3YTE4ZmJkYlwvZDRwMWszei1mYWI4M2E3MS04MzgzLTRmNzktYTExMy0xNjBkYTE1NTVhMzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1XJEYwUK-EwjjzHStdcB2QpYnDsMzrdhIK9ykgLECVk",
        toko: "Angkringan",
        jalan: "Jln.Mangkang semarang"
      }
    ]
  };

  pilihResto = id => {
    var dataResto = this.state.malls;
    const order = dataResto.find(key => key.id === id);
    console.log(order);
    sessionStorage.setItem("resto", JSON.stringify([order]));
  };

  render() {
    return (
      <div>
        <Row>
          {this.state.malls.map(mall => (
            <Col xs="12">
              <Cabang
                gambar={mall.gambar}
                toko={mall.toko}
                jalan={mall.jalan}
                pilihResto={() => this.pilihResto(mall.id)}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default Call;
