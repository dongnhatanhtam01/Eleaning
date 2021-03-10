import React, { useEffect, useContext, useReducer, useState } from "react"
import StateContext from "../StateContext"
import Axios from "axios"
import DispatchContext from "../DispatchContext"

function AccountDetails() {
  const [taiKhoan, setTaiKhoan] = useState()
  const [matKhau, setMatKhau] = useState()
  const [hoTen, setHoTen] = useState()
  const [soDT, setSoDT] = useState()
  const [email, setEmail] = useState()

  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  async function handleSubmit(e) {
    e.preventDefault()
    alert(true)
    try {
      const response = Axios.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
        taiKhoan,
        matKhau,
        hoTen,
        soDT,
        "maLoaiNguoiDung": appState.account.maLoaiNguoiDung,
        "maNhom": "GP01",
        email
      }, {
        headers: {
          'Authorization': `Bearer ${appState.user.accessToken}`
        }
      })
      console.log(response.data)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source()
    async function getAccountDetails() {
      try {
        const response = await Axios.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan", {
          taiKhoan: appState.user.taiKhoan,
          matKhau: appState.user.matKhau
        }, {
          headers: {
            'Authorization': `Bearer ${appState.user.accessToken}`
          }
        }, { cancelToken: ourRequest.token }
        )
        if (response.data) {
          appDispatch({ type: "APPROACH_ACCOUNT", data: { ...response.data } })
        }
      }
      catch (e) {
        console.log("This must be error...");
      }
    }
    getAccountDetails()
    return () => {
      ourRequest.cancel()
    }
  }, [])

  return (
    <>
      <div>@{appState.user.taiKhoan} </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Thông tin tài khoản</legend>
          <label>Tên tài khoản:</label>
          <input
            className="input-dark"
            className="m-2 "
            placeholder={appState.account.taiKhoan}
            onChange={e => setTaiKhoan(e.target.value)}
          />{" "}
          <br />

          Email:
          <input className="input-dark"
            className="m-2 "
            placeholder={appState.account.email}
            onChange={e => setEmail(e.target.value)}
          />{" "}
          <br />
          Họ tên:
          <input className="input-dark"
            className="m-2 "
            placeholder={appState.account.hoTen}
            onChange={e => setHoTen(e.target.value)}
          />{" "}
          <br />
          Số điện thoại:
          <input className="input-dark"
            className="m-2 "
            placeholder={appState.account.soDT}
            onChange={e => setSoDT(e.target.value)}
          />{" "}
          <br />
          Mật Khẩu:
          <input className="input-dark"
            className="m-2 "
            placeholder={appState.account.matKhau}
            onChange={e => setMatKhau(e.target.value)}
          />{" "}
          <br />
          <button className="btn btn-dark">Chỉnh sửa</button>
        </fieldset>
      </form>
    </>
  )
}

export default AccountDetails