import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class BaseLayout extends Component {
  render() {
    let ulStyle = {
      listStyleType: "none",
      fontFamily: "Poppins",
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "#666",
      padding: 0,
      margin: 0,
      height: "3em",
      fontSize: "1.5em"
    }
    let liStyle = {
      paddingTop: "1em"
    }
    let navLinkStyle = {
      textDecoration: "none",
      color: "white"
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <ul className="nav navbar-nav" style={ulStyle}>
            <li style={liStyle}>
              <NavLink style={navLinkStyle} to="/">
                PollyBlog
              </NavLink>
            </li>
            <li style={liStyle}>
              <NavLink style={navLinkStyle} to="/createpost">
                Create Post
              </NavLink>
            </li>
            <li style={liStyle}>
              <NavLink style={navLinkStyle} to="/showposts">
                <span>Show All Posts</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
