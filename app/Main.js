import React, { useState, useEffect, useReducer } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from "axios"

import { useImmerReducer } from "use-immer"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

import HomeGuest from "./components/HomeGuest"
import About from "./components/About"
import Terms from "./components/Terms"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Header from "./components/Header"

Axios.defaults.baseURL = 'https://elearning0706.cybersoft.edu.vn'

function Main() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("elearningappToken")),
    user: {
      accessToken: localStorage.getItem("elearningappToken"),
      taiKhoan: localStorage.getItem("elearningappUsername")
    }
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "LOG_IN_ACTION":
        draft.loggedIn = true
        draft.user = action.data
        return
      case "LOG_OUT_ACTION":
        draft.loggedIn = false
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("elearningappToken", state.user.accessToken)
      localStorage.setItem("elearningappUsername", state.user.taiKhoan)
    } else {
      localStorage.removeItem("elearningappToken")
      localStorage.removeItem("elearningappUsername")
    }

  }, [state.loggedIn])
  // const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem(
  //   "elearningappToken"
  // )))
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              {state.loggedIn ? <Home /> : <HomeGuest />}
            </Route>
            <Route path="/thanhvien" exact>
              <HomeGuest />
            </Route>
            <Route path="/gioithieu" exact component={About} />
            <Route path="/dieukhoan" exact component={Terms} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))
if (module.hot) {
  module.hot.accept()
}