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
        info: false,
        source: require("./PlayersPics/altay-fb1.jpeg"),
        bouton: true,
      },
      {
        id: 2,
        name: "Serdar Aziz",
        age: "29",
        mevki: "Stoper",
        info: false,
        source: require("./PlayersPics/SerdarAziz.jpeg"),
        bouton: true,
      },
      {
        id: 3,
        name: "Simon Falette",
        age: "23",
        mevki: "Stoper",
        info: false,
        source: require("./PlayersPics/Simon Falette.jpg"),
        bouton: true,
      },
      {
        id: 4,
        name: "Nabil Dirar",
        age: "33",
        mevki: "Sag Bek",
        info: false,
        source: require("./PlayersPics/Nabil Dirar.jpeg"),
        bouton: true,
      },
      {
        id: 5,
        name: "Hasan Ali K.",
        age: "32",
        mevki: "Sol Bek",
        info: false,
        source: require("./PlayersPics/Hasan Ali Kaldirim.jpeg"),
        bouton: true,
      },
      {
        id: 6,
        name: "Emre Belözoglu",
        age: "37",
        mevki: "Orta Saha",
        info: false,
        source: require("./PlayersPics/Emre.jpeg"),
        bouton: true,
      },
      {
        id: 7,
        name: "Luiz Gustavo",
        age: "32",
        mevki: "Orta Saha",
        info: false,
        source: require("./PlayersPics/Luis Gustavo.jpeg"),
        bouton: true,
      },
      {
        id: 8,
        name: "Ozan Tufan",
        age: "25",
        mevki: "Orta Saha",
        info: false,
        source: require("./PlayersPics/Ozan Tufan.jpeg"),
        bouton: true,
      },
      {
        id: 9,
        name: "Deniz Türüç",
        age: "28",
        mevki: "Orta Saha",
        info: false,
        source: require("./PlayersPics/Deniz türüç.jpeg"),
        bouton: true,
      },
      {
        id: 10,
        name: "Gary Rodriguez",
        age: "29",
        mevki: "Kanat",
        info: false,
        source: require("./PlayersPics/Gary.jpeg"),
        bouton: true,
      },
      {
        id: 11,
        name: "Tolga Cigerci",
        age: "29",
        mevki: "Orta Saha",
        info: false,
        source: require("./PlayersPics/Tolga.jpeg"),
        bouton: true,
      },
      {
        id: 12,
        name: "Ferdi Kadioglu",
        age: "21",
        mevki: "Stoper",
        info: false,
        source: require("./PlayersPics/Ferdi.jpeg"),
        bouton: true,
      },
      {
        id: 13,
        name: "Mevlüt Erdinç",
        age: "33",
        mevki: "Stoper",
        info: false,
        source: require("./PlayersPics/Mevlüt.jpeg"),
        bouton: true,
      },
      {
        id: 14,
        name: "Vedat Muriqi",
        age: "26",
        mevki: "Stoper",
        info: false,
        source: require("./PlayersPics/Vedat.jpeg"),
        bouton: true,
      },
    ],
  };

  showInfo = (i) => {
    this.setState((state) => ({
      ...state,
      players: state.players.map((player, index) =>
        index === i
          ? { ...player, info: !player.info, bouton: !player.bouton }
          : player
      ),
    }));
  };

  handleClick = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  render() {
    const pl = this.state.players.map((player, i, e) => {
      return (
        // <div key={player.id}>
        //  <p>{player.name}</p>
        //  {/* <p onClick={this.btnDisplay} id={player.id}>{player.id}</p> */}
        //  <button onClick={this.btnDisplay} id={player.id}>{this.state.btn === true ? "SHOW" : "HIDE"}</button>
        //        {hideInfo === true ? (
        //         <div className="opening">
        //            <p>{player.name}</p>
        //            <p>{player.age} </p>
        //            <p>{player.mevki} </p>
        //          </div>
        //        ) : null}
        // </div>

        <div key={i} className="card--content movie" onClick={this.handleClick}>
          <div className="content">
            <img src={player.source} alt="" />

            <div class="buttons">
              <p
                className="btn effect04 movie"
                onClick={() => this.showInfo(i)}
                key={player[i]}
                data-sm-link-text="INFO"
              >
                <span>{player.bouton === true ? "SHOW" : "HIDE"}</span>
              </p>
              {player.info && (
                <div className="opening">
                  <p>{player.name}</p>
                  <p>{player.age} </p>
                  <p>{player.mevki} </p>
                </div>
              )}
              )
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <section className="card">{pl}</section>
      </div>

      //   this.state.players.map((movie, i) => {
      //     return (
      //       <div className="container">
      //       <section className="card">
      //       <div className="movie card--content" onClick={this.handleClick} key={i}>
      //       <div className="content">
      //       <img src={movie.source} alt="" />

      //       <div class="buttons">
      //         <p onClick={() => this.showInfo()} key={i} className="btn effect04 movie" data-sm-link-text="INFO"><span></span>
      //         </p>
      //         <div className="opening">
      //         <p>{movie.age}</p>
      //         <p>{movie.mevki}</p>
      //         </div>
      //       </div>

      //       </div>
      //       </div>
      //       </section>
      //       </div>)})}
      //       </div>
    );
  }
}
