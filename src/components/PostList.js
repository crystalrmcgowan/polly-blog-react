import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: []
    }
  }
  componentDidMount() {
    let url = "https://tiny-lasagna-server.herokuapp.com/collections/blogger/"
    fetch(url).then(results => results.json()).then(postList => {
      this.setState({ postList })
    })
  }
  render() {
    let eachPostStyle = {
      fontFamily: "Poppins",
      padding: "1em",
      textAlign: "center",
      fontSize: "1.5em"
    }
    const postList = this.state.postList.map(list => {
      return (
        <div className="eachPost" key={list._id} style={eachPostStyle}>
          <Link to={`/showpost/${list._id}`}>
            {list.title}
          </Link>
          <p>
            {list.blogPost}
          </p>
          <p>
            {list.author}
          </p>
        </div>
      )
    })
    return (
      <div className="postList">
        {postList}
      </div>
    )
  }
}
