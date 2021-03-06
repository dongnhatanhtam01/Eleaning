import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from "axios"

import HomeGuest from "./components/HomeGuest"
import About from "./components/About"
import Terms from "./components/Terms"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Header from "./components/Header"

Axios.defaults.baseURL = 'https://elearning0706.cybersoft.edu.vn'

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home  />
        </Route>
        <Route path="/thanhvien" exact>
          <HomeGuest />
        </Route>
        <Route path="/gioithieu" exact component={About} />
        <Route path="/dieukhoan" exact component={Terms} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))