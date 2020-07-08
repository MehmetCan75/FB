import React, { Component } from 'react';

export default class Content extends Component {
    state = {
        players: [
          {
            id: 1,
            name: "Altay Bayindir",
            age: "21",
            mevki: "Kaleci",
            source: require("./IlkOnbir/PlayersPics/altay-fb1.jpeg"),
          },
          {
            id: 2,
            name: "Serdar Aziz",
            age: "29",
            mevki: "Stoper",
            source: require("./IlkOnbir/PlayersPics/SerdarAziz.jpeg"),
          },
          {
            id: 3,
            name: "Simon Falette",
            age: "23",
            mevki: "Stoper",
            source: require("./IlkOnbir/PlayersPics/Simon Falette.jpg"),
          },
          {
            id: 4,
            name: "Nabil Dirar",
            age: "33",
            mevki: "Sag Bek",
            source: require("./IlkOnbir/PlayersPics/Nabil Dirar.jpeg"),
          },
          {
            id: 5,
            name: "Hasan Ali Kaldirim",
            age: "32",
            mevki: "Sol Bek",
            source: require("./IlkOnbir/PlayersPics/Hasan Ali Kaldirim.jpeg"),
          },
          {
            id: 6,
            name: "Emre Belözoglu",
            age: "37",
            mevki: "Orta Saha",
            source: require("./IlkOnbir/PlayersPics/Emre.jpeg"),
          },
          {
            id: 7,
            name: "Luiz Gustavo",
            age: "32",
            mevki: "Orta Saha",
            source: require("./IlkOnbir/PlayersPics/Luis Gustavo.jpeg"),
          },
          {
            id: 8,
            name: "Ozan Tufan",
            age: "25",
            mevki: "Orta Saha",
            source: require("./IlkOnbir/PlayersPics/Ozan Tufan.jpeg"),
          },
          {
            id: 9,
            name: "Deniz Türüç",
            age: "28",
            mevki: "Orta Saha",
            source: require("./IlkOnbir/PlayersPics/Deniz türüç.jpeg"),
          },
          {
            id: 10,
            name: "Gary Rodriguez",
            age: "29",
            mevki: "Kanat",
            source: require("./IlkOnbir/PlayersPics/Gary.jpeg"),
          },
          {
            id: 11,
            name: "Tolga Cigerci",
            age: "29",
            mevki: "Orta Saha",
            source: require("./IlkOnbir/PlayersPics/Tolga.jpeg"),
          },
          {
            id: 12,
            name: "Ferdi",
            age: "21",
            mevki: "Stoper",
            source: require("./IlkOnbir/PlayersPics/Ferdi.jpeg"),
          },
          {
            id: 13,
            name: "Mevlüt",
            age: "33",
            mevki: "Stoper",
            source: require("./IlkOnbir/PlayersPics/Mevlüt.jpeg"),
          },
          {
            id: 14,
            name: "Vedat",
            age: "26",
            mevki: "Stoper",
            source: require("./IlkOnbir/PlayersPics/Vedat.jpeg"),
          },
        ],
      };
render() {
    const Content = () => {

        // pick out the character you want by id
        const character = this.state.players.find(character => character.id === 2);
      
        return (
          <div className="characters" key={character.id}>
            <p>Name: {character.name}</p>
            <p>ID: {character.id}</p>
            <p>Age: {character.age}</p>
 
          </div>
        );
    }
return (
// Grab the 'characters' object from App.js, and assign it to 'this.props'
    <div>
        <Content />
    </div>
// Filter the chracters and return only whose 'id' belongs to that of '6'

)}}