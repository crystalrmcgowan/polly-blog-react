import React, { Component } from "react"
// import "./styles/App.css"

class App extends Component {
  render() {
    let divStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "5em",
      fontFamily: "Poppins",
      backgroundImage:
        "url(https://centralfloridaesa.files.wordpress.com/2013/06/pollywog.jpg)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat"
    }
    let welcomeStyle = {
      fontSize: "5em",
      paddingLeft: "3em"
    }
    let subTitleStyle = {
      fontSize: "3em",
      paddingLeft: "3em"
    }
    return (
      <div className="App" style={divStyle}>
        <h1 style={welcomeStyle}>Welcome to PollyBlog</h1>
        <h3 style={subTitleStyle}>
          Where it's just a PollyBlog on a console.log()
        </h3>
      </div>
    )
  }
}

export default App
