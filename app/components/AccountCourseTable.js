import React, { useEffect, useContext } from "react"
import StateContext from "../StateContext"

function AccountCourseTable() {
  const appState = useContext(StateContext)
  return (
    // chiTietKhoaHocGhiDanh
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">mã khóa học</th>
            <th scope="col">tên khóa học</th>
          </tr>
        </thead>
        <tbody>
          {appState.account.chiTietKhoaHocGhiDanh.map((item, index) => {
            return (
              <tr key={index}>
                <th  scope="row">{index + 1}</th>
                <td>{item.maKhoaHoc}</td>
                <td>{item.tenKhoaHoc}</td></tr>
            )
          })}
        </tbody>
      </table>

    </>
  )
}

export default AccountCourseTable