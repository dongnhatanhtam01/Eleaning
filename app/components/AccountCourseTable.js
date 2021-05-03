import React, { useEffect, useContext } from "react"
import StateContext from "../StateContext"

function AccountCourseTable() {
  const appState = useContext(StateContext)
  return (
    // chiTietKhoaHocGhiDanh
    <table className="table table-fit mb-5 mt-5" style={{height:"100vh"}}>
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">mã khóa học</th>
          <th scope="col">tên khóa học</th>
          {/* <th></th> */}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {(appState.account.chiTietKhoaHocGhiDanh != "") ? appState.account.chiTietKhoaHocGhiDanh.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.maKhoaHoc}</td>
              <td>{item.tenKhoaHoc}</td>
              {/* <td><button type="button" className="btn btn-light btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path fill="green"  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
              </svg></button></td> */}
              <td><button type="button" className="btn btn-light btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                <path fill="red"  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
              </svg></button></td>
            </tr>
          )
        }) : <tr><td className="text-center" colSpan="4">Không có khóa học nào...</td></tr>}
      </tbody>
    </table>
  )
}
export default AccountCourseTable