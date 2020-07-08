import React from 'react'

export default class MyApp extends React.Component {
  handleClick(e){
    console.log(e.target.id);
  }
  
  render() {
    let data = ["SHOW", "HIDE"

    ]

    let list = data.map((obj, id) => {
      return <div key={obj[id]} id={"id-" + data[id]} onClick={this.handleClick}>{obj}</div>         
    });
    return <div>{list}</div>
  }
}