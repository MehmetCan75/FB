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
      {
        id: 3,
        name: "Simon Falette",
        age: "23",
        mevki: "Stoper",
        source: require("./PlayersPics/Simon Falette.jpg"),
      },
      {
        id: 4,
        name: "Nabil Dirar",
        age: "33",
        mevki: "Sag Bek",
        source: require("./PlayersPics/Nabil Dirar.jpeg"),
      },
      {
        id: 5,
        name: "Hasan Ali Kaldirim",
        age: "32",
        mevki: "Sol Bek",
        source: require("./PlayersPics/Hasan Ali Kaldirim.jpeg"),
      },
      {
        id: 6,
        name: "Emre Belözoglu",
        age: "37",
        mevki: "Orta Saha",
        source: require("./PlayersPics/Emre.jpeg"),
      },
      {
        id: 7,
        name: "Luiz Gustavo",
        age: "32",
        mevki: "Orta Saha",
        source: require("./PlayersPics/Luis Gustavo.jpeg"),
      },
      {
        id: 8,
        name: "Ozan Tufan",
        age: "25",
        mevki: "Orta Saha",
        source: require("./PlayersPics/Ozan Tufan.jpeg"),
      },
      {
        id: 9,
        name: "Deniz Türüç",
        age: "28",
        mevki: "Orta Saha",
        source: require("./PlayersPics/Deniz türüç.jpeg"),
      },
      {
        id: 10,
        name: "Gary Rodriguez",
        age: "29",
        mevki: "Kanat",
        source: require("./PlayersPics/Gary.jpeg"),
      },
      {
        id: 11,
        name: "Tolga Cigerci",
        age: "29",
        mevki: "Orta Saha",
        source: require("./PlayersPics/Tolga.jpeg"),
      },
      {
        id: 12,
        name: "Ferdi",
        age: "21",
        mevki: "Stoper",
        source: require("./PlayersPics/Ferdi.jpeg"),
      },
      {
        id: 13,
        name: "Mevlüt",
        age: "33",
        mevki: "Stoper",
        source: require("./PlayersPics/Mevlüt.jpeg"),
      },
      {
        id: 14,
        name: "Vedat",
        age: "26",
        mevki: "Stoper",
        source: require("./PlayersPics/Vedat.jpeg"),
      },
    ],
  };

  showInfo = (i) => {
    this.setState({ info: !this.state.info});
  };
  
  handleClick = event => {
    event.currentTarget.classList.toggle('active');
  }

  btnDisplay = (e) => {
    
    console.log(e.currentTarget.id)

    this.setState({info: !this.state.info, btn:!this.state.btn})
 
  }

  render() {
    const hideInfo = this.state.info;

    const pl = this.state.players.map((player,i) => {
      return (
        <div key={i}>
         <p>{player.name}</p>
         {/* <p onClick={this.btnDisplay} id={player.id}>{player.id}</p> */}
        <button onClick={this.btnDisplay} id={player.id}>{this.state.btn === true ? "SHOW" : "HIDE"}</button>
               {hideInfo === true ? (
                <div className="opening">
                   <p>{player.name}</p>
                   <p>{player.age} </p>
                   <p>{player.mevki} </p>
                 </div>
               ) : null}
        </div>
        // <div key={i} className="card--content movie" onClick={this.handleClick}>
        //   <div className="content">
        //     <img src={player.source} alt="" />

        //     <div class="buttons">
        //       <p
        //         onClick={() => this.showInfo(player[i])} key={player[i]} className="btn effect04 movie" data-sm-link-text="INFO"><span>{this.state.btn === true ? "SHOW" : "HIDE"}</span>
        //       </p>
        //       {hideInfo === true ? (
        //         <div className="opening">
        //           <p>{player.name}</p>
        //           <p>{player.age} </p>
        //           <p>{player.mevki} </p>
        //         </div>
        //       ) : (
        //         ""
        //       )}
        //     </div>
        //   </div>
        //   </div>
        
      )})
    

    return (
      <div className="container">
        <section className="card">
        {pl}
        </section>

{/*       
      <div>
      {
        this.state.players.map((movie, i) => {
          return (
            <div className="movie" onClick={this.handleClick} key={i}>              <p
                onClick={() => this.showInfo()} key={i} className="btn effect04 movie" data-sm-link-text="INFO"><span></span>
              </p>
              <div className="opening">{movie.age}</div>
              <div className="opening">{movie.mevki}</div>
            </div>
          );
        })}
      </div> */}
      </div>

    );
}
}
