import React, { Component } from "react"

export default class ShowPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      author: "",
      title: "",
      blogPost: ""
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params
    let url = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`

    fetch(url).then(results => results.json()).then(res => {
      this.setState({
        id: res._id,
        author: res.author,
        title: res.title,
        blogPost: res.blogPost
      })
    })
  }
  render() {
    let allPostsStyle = {
      fontFamily: "Poppins",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      paddingTop: "3em"
    }
    return (
      <div className="showPost" style={allPostsStyle}>
        <h1>
          {this.state.title}
        </h1>
        <h1>
          {this.state.blogPost}
        </h1>
        <h1>
          {this.state.author}
        </h1>
      </div>
    )
  }
}
