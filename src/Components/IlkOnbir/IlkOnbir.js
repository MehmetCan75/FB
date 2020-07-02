import React, { Component } from "react";
import "./IlkOnbir.css";

// import Altay from "./PlayersPics/altay-fb1.jpeg";
// import Serdar from "./PlayersPics/SerdarAziz.jpeg";
// import Simon from "./PlayersPics/Simon Falette.jpg";
// import Nabil from "./PlayersPics/Nabil Dirar.jpeg";
// import Hasan from "./PlayersPics/Hasan Ali Kaldirim.jpeg";
// import Emre from "./PlayersPics/Emre.jpeg";
// import Luiz from "./PlayersPics/Luis Gustavo.jpeg";
// import Ozan from "./PlayersPics/Ozan Tufan.jpeg";
// import Deniz from "./PlayersPics/Deniz türüç.jpeg";
// import Gary from "./PlayersPics/Gary.jpeg";
// import Tolga from "./PlayersPics/Tolga.jpeg";
// import Ferdi from "./PlayersPics/Ferdi.jpeg";
// import Mevlut from "./PlayersPics/Mevlüt.jpeg";
// import Vedat from "./PlayersPics/Vedat.jpeg";

export default class IlkOnbir extends Component {
  state = {
    info: false,
    btn: true,
    players: [
      {
        id: 1,
        name: "Altay Bayindir",
        age: "21",
        mevki: "Kaleci",
        source: require("./PlayersPics/altay-fb1.jpeg"),
      },
      {
        id: 2,
        name: "Serdar Aziz",
        age: "29",
        mevki: "Stoper",
        source: require("./PlayersPics/SerdarAziz.jpeg"),
      },
    ],
  };

  showInfo = (id) => {
    this.setState({ info: !this.state.info, btn: !this.state.btn });
  };
  
  btnDisplay = () => {
    const bouton = this.state.btn  
    if(bouton === true) {
       return <p>SHOW</p>
    } else {
      return <p>HIDE</p>
    }
  }

  render() {
    const hideInfo = this.state.info;

    const pl = this.state.players.map((player) => {
      return (
        <div key={player.id} className="card--content">
          <div className="content">
            <img src={player.source} alt="" />

            <div class="buttons">
              <p
                onClick={() => this.showInfo(player.id)} class="btn effect04" data-sm-link-text="INFO"><span>{this.btnDisplay()}</span>
              </p>
              {hideInfo === true ? (
                <div>
                  <p>{player.name}</p>
                  <p>{player.age} </p>
                  <p>{player.mevki} </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <section class="card">
          {pl}
        </section>
      </div>
    );
  }
}
