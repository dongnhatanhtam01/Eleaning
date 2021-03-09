import React, { useEffect, useContext, useReducer } from "react"
import StateContext from "../StateContext"
import Axios from "axios"
import DispatchContext from "../DispatchContext"

function AccountDetails() {
  const appDispatch = useContext(DispatchContext)
  function handleSubmit() {
    alert(true)
  }
  const appState = useContext(StateContext)
  async function getAccountDetails() {
    try {
      const response = await Axios.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan", {
        taiKhoan: appState.user.taiKhoan,
        matKhau: appState.user.matKhau
      }, {
        headers: {
          'Authorization': `Bearer ${appState.user.accessToken}`
        }
      })
      if (response.data) {
        appDispatch({ type: "APPROACH_ACCOUNT", data: { ...response.data } })
      }
    }
    catch (e) {
      console.log("This must be error...");
    }
  }
  getAccountDetails()
  return (
    <>
      <div>@{appState.user.taiKhoan} </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Thông tin tài khoản</legend>
          <label>Tên tài khoản:</label>
          <input className="input-dark"
            className="m-2 "
            placeholder={appState.account.taiKhoan}
          />{" "}
          <br />

          Email:
          <input className="input-dark"
            className="m-2 "
            placeholder={appState.account.email}
          />{" "}
          <br />
          Họ tên:
          <input className="input-dark"
            className="m-2 "
            placeholder={appState.account.hoTen}
          />{" "}
          <br />
          Số điện thoại:
          <input className="input-dark"
            className="m-2 "
            placeholder={appState.account.soDT}
          />{" "}
          <br />
          Mật Khẩu:
          <input className="input-dark"
            className="m-2 "
            placeholder={appState.account.matKhau}
          />{" "}
          <br />
          <button className="btn btn-danger">Chỉnh sửa</button>
        </fieldset>
      </form>
    </>
  )
}

export default AccountDetails