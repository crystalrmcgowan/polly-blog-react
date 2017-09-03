import React, { Component } from "react"

export default class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: "",
      title: "",
      blogPost: ""
    }
  }

  _change = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  _submit = event => {
    event.preventDefault()
    let post = JSON.stringify(this.state)

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: post,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "yay")
      })
      .catch(err => {
        console.log(err, "boo!")
      })

    this.setState({
      author: "",
      title: "",
      blogPost: ""
    })
  }
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
        <form onSubmit={this._submit}>
          <div className="author">
            <p> Author's Name</p>
            <input
              name="author"
              value={this.state.author}
              onChange={this._change}
              style={inputStyle}
              type="text"
              placeholder="Enter your name or email address..."
            />
          </div>
          <div className="title">
            <p>Title</p>
            <input
              name="title"
              value={this.state.title}
              onChange={this._change}
              style={inputStyle}
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="blog">
            <p>Write your blog...</p>
            <textarea
              name="blogPost"
              value={this.state.blogPost}
              onChange={this._change}
              rows="10"
              cols="100"
            />
          </div>
          <button style={buttonStyle} type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
