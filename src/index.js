import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"
import ShowPost from "./components/ShowPost"
import BaseLayout from "./components/BaseLayout"

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/create" component={CreatePost} />
        <Route path="/postlist" component={PostList} />
        <Route path="/show" component={ShowPost} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
