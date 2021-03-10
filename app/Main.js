import React, { useState, useEffect, useReducer } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Axios from "axios"

import { useImmerReducer } from "use-immer"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

import AccountManagement from "./components/AccountManagement"
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
      taiKhoan: localStorage.getItem("elearningappUsername"),
      matKhau: localStorage.getItem("elearningappPassword")
    },
    account: {
      email: "",
      hoTen: "",
      maLoaiNguoiDung: "",
      maNhom: "",
      matKhau: "",
      soDT: "",
      taiKhoan: "",
      chiTietKhoaHocGhiDanh: []
    },
    courses: []
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
      case "APPROACH_ACCOUNT":
        draft.account = action.data
        return
      case "GET_COURSES":
        draft.courses = action.data
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("elearningappToken", state.user.accessToken)
      localStorage.setItem("elearningappUsername", state.user.taiKhoan)
      localStorage.setItem("elearningappPassword", state.user.matKhau)
    } else {
      localStorage.removeItem("elearningappToken")
      localStorage.removeItem("elearningappPassword")
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
            <Route exact path="/"  >
              {state.loggedIn ? <Home /> : <HomeGuest />}
            </Route>
            <Route exact path="/danh-sach-khoa-hoc">
              <HomeGuest />
            </Route>
            <Route path="/thanhvien" exact>
              <AccountManagement />
            </Route>
            <Route exact path="/gioithieu" component={About} />
            <Route exact path="/dieukhoan" component={Terms} />
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