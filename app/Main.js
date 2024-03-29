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
import CourseDetailsPage from "./components/CourseDetailsPage"

import courseAPI from "./api/courseAPI"

Axios.defaults.baseURL = 'https://elearning0706.cybersoft.edu.vn'

function Main() {

 // demo 04.23.21
 const [courseDemo, setCourseDemo] = useState([])
 useEffect(() => {
  console.log(process.env.REACT_APP_API_URL);
  const ourRequest = Axios.CancelToken.source()

  const fetchCourseDemo = async () => {
   try {
    const params = { maNhom: 'GP01' }
    const response = await courseAPI.getAll(params, { cancelToken: ourRequest.token })
    console.log('Fetch courses successfully', response)
    setCourseDemo(response.data)
   }
   catch (error) {
    console.log("there was an error.", error.message)
   }
  }
  fetchCourseDemo()
  return () => {
   ourRequest.cancel()
  }
 }, [])


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
  courses: [],
  courseDetails: {}
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
   case "GET_COURSE_DETAILS":
    draft.courseDetails = action.data
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
      <Route exact path="/chitiet/:maKhoaHoc" component={CourseDetailsPage} />
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