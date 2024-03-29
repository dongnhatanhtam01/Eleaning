import React, { useEffect, useState, useContext } from "react"
import Page from "./Page"
import StateContext from "../StateContext"
import AccountDetails from "./AccountDetails"
import AccountCourseTable from "./AccountCourseTable"
import {Link, NavLink} from "react-router-dom"
import "../common/css/Home.scss"

function Home() {
  const appState = useContext(StateContext)
  return (
    <Page title="Trang chủ"  wide>
      <h4 className="text-left border-bottom home_container">Xin Chào <strong>{appState.user.taiKhoan}</strong>,<NavLink to="/danh-sach-khoa-hoc" style={{color:"#ffc107", textDecoration:"none"}}> (Xem tất cả)</NavLink> {" "}</h4>
      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Thông tin tài khoản</a>
            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Khóa học của tôi</a>
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><AccountDetails /></div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <div>
                <AccountCourseTable />
              </div>

            </div>
          </div>
        </div>
      </div>

    </Page>
  )
}

export default Home