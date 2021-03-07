import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function HeaderLoggedIn(props) {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  function handelLoggedOut() {
    appDispatch({ type: "LOG_OUT_ACTION" })
    // props.setLoggedIn(false)
    // localStorage.removeItem("elearningappToken" )
    // localStorage.removeItem("elearningappUsername" )
  }
  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-dark mr-2 ">
        tài khoản,  {appState.user.taiKhoan}
      </a>
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      {/* <a href="#" className="mr-2">
        <img
          className="small-header-avatar"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fnice_3159075&psig=AOvVaw22lhzxrT9gGBa8m2FZnr7U&ust=1615103528423000&source=images&cd=vfe&ved=2ahUKEwic4PvRl5vvAhVIAN4KHRnXDYUQjRx6BAgAEAc"
        />
      </a> */}
      <Link className="btn btn-sm btn-success mr-2" to="/create-post">
        Create Post
    </Link>
      <button onClick={handelLoggedOut} className="btn btn-sm btn-danger">Sign Out</button>
    </div>
  )
}

export default HeaderLoggedIn