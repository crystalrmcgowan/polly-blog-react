import React, { Component } from "react"

export default class CreatePost extends Component {
  render() {
    let entirePost = {
      display: "flex",
      justifyContent: "center",
      paddingTop: "2em",
      fontSize: "2em",
      fontFamily: "Poppins"
    }

    let inputStyle = {
      fontSize: "1em",
      width: "20em"
    }
    let buttonStyle = {
      fontSize: "1em",
      padding: "0.5em",
      backgroundColor: "#666"
    }
    return (
      <div className="entirePost" style={entirePost}>
        <form>
          <div className="author">
            <p> Author's Name</p>
            <input
              style={inputStyle}
              type="text"
              placeholder="Enter your name or email address..."
            />
          </div>
          <div className="title">
            <p>Title</p>
            <input style={inputStyle} type="text" placeholder="Title" />
          </div>
          <div className="blog">
            <p>Write your blog...</p>
            <textarea rows="10" cols="100" />
          </div>
          <button style={buttonStyle} type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
