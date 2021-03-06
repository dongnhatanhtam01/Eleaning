import React, { useEffect, useState } from "react"
import Axios from "axios"

function HeaderLoggedOut() {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await Axios.post("/api/QuanLyNguoiDung/DangNhap",
        {
          "taiKhoan": username,
          "matKhau": password
        }
      )
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
    </>
  )
}

export default HeaderLoggedOut