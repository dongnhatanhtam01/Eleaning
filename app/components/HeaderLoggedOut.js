import React, { useEffect, useState, useContext } from "react"
import { Link,Route, withRouter } from "react-router-dom"
import Axios from "axios"
import DispatchContext from "../DispatchContext"

function HeaderLoggedOut(props) {
  const appDispatch = useContext(DispatchContext)
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("/api/QuanLyNguoiDung/DangNhap",
        {
          "taiKhoan": username,
          "matKhau": password
        }

      )
      if (response.data) {
        props.history.push("/")
        appDispatch({
          type: "LOG_IN_ACTION", data: { ...response.data, matKhau: password }
        })
        // props.setLoggedIn(true)
        // localStorage.setItem("elearningappToken", response.data.accessToken)
        // localStorage.setItem("elearningappUsername", response.data.taiKhoan)
      }
    }
    catch (e) {
      console.log("Đăng nhập không thành công");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
        <div className="row align-items-center">
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input
              onChange={(e) => setUserName(e.target.value)}
              name="username"
              className="form-control form-control-sm input-dark"
              type="text"
              placeholder="Username"
              autoComplete="off"
            />
          </div>
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form-control form-control-sm input-dark"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="col-md-auto">
            <button className="btn btn-warning btn-sm">Đăng nhập</button>
          </div>
        </div>
      </form>
      <div className="col-md-auto">
        <Link className="btn btn-warning btn-sm" to="/thanhvien">Đăng ký</Link>
      </div>
    </>
  )
}

export default withRouter(HeaderLoggedOut)