import React, { useEffect, useState } from "react"
import Page from "./Page"
import Axios from "axios"

function AccountManagement() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [fullname, setFullName] = useState()
  const [group, setGroup] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    alert(true)
    try {
      await Axios.post("/api/QuanLyNguoiDung/DangKy", {
        "taiKhoan": username,
        "matKhau": password,
        "hoTen": fullname,
        "soDT": phone,
        "maNhom": group,
        "email": email
      })
      console.log(response.data);
    }
    catch (e) {
      console.log("Đăng ký không thành công..!");
    }
  }
  return (
    <Page wide={true} title="Chào tâm">
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-4 fw-bold">Đăng ký thông tin</h1>
          <p className="lead text-muted">
            Are you sick of short tweets and impersonal &ldquo;shared&rdquo;
            posts that are reminiscent of the late 90&rsquo;s email forwards?
            We believe getting back to actually writing is the key to enjoying
            the internet again.
            </p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Tên đăng nhập / Tài khoản: </small>
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                id="username-register"
                name="username"
                className="form-control"
                type="text"
                placeholder="Nhập tên tài khoản"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email-register"
                name="email"
                className="form-control"
                type="text"
                placeholder="you@example.com"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Mật khẩu: </small>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password-register"
                name="password"
                className="form-control"
                type="password"
                placeholder="Nhập mật khẩu"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fullname-register" className="text-muted mb-1">
                <small>Họ tên: </small>
              </label>
              <input
                onChange={(e) => setFullName(e.target.value)}
                id="fullname-register"
                name="fullname"
                className="form-control"
                type="text"
                placeholder="Nhập họ và tên"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone-register" className="text-muted mb-1">
                <small>Số điện thoại</small>
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                id="phone-register"
                name="phone"
                className="form-control"
                type="text"
                placeholder="Nhập số điện thoại"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="group-register" className="text-muted mb-1">
                <small>Mã Nhóm: </small>
              </label>
              <input
                onChange={(e) => setGroup(e.target.value)}
                id="group-register"
                name="group"
                className="form-control"
                type="text"
                placeholder="Nhập nhóm của bạn"
                autoComplete="off"
              />
            </div>


            <button
              type="submit"
              className="py-3 mt-4 btn btn-sm btn-warning btn-block"
            >
              Đăng ký
              </button>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default AccountManagement