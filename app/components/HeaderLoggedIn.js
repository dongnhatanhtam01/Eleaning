import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { Route, withRouter } from 'react-router-dom'
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function HeaderLoggedIn(props) {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  function handleLoggedOut() {
    appDispatch({ type: "LOG_OUT_ACTION" })
    return props.history.push("/")
  }
  return (
    <div className="flex-row my-3 my-md-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
        <path fill="white"   d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
        <path  fill="white"  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg> {" "}
      <Link to="/" className="text-white mr-2 " style={{textDecoration:"none"}}>
        tài khoản,  {appState.user.taiKhoan}
      </Link>
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
      <Link className="btn btn-sm btn-primary mr-2" to="/create-post" >
        Create Post
    </Link>
      <button onClick={handleLoggedOut} className="btn btn-sm btn-dark">Sign Out</button>
    </div>
  )
}

export default withRouter(HeaderLoggedIn)