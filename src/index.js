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
        <Route path="/createpost" component={CreatePost} />
        <Route path="/showposts" component={PostList} />
        <Route path="/showpost/:id" component={ShowPost} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
