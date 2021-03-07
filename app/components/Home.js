import React, { useEffect, useState, useContext } from "react"
import Page from "./Page"
import StateContext from "../StateContext"
import HomeGuest from "./HomeGuest"

function Home() {
  const appState = useContext(StateContext)
  return (
    <Page title="Trang chủ" wide>
      <h3 className="text-left border-bottom">Xin Chào <strong>{appState.user.taiKhoan}</strong>, {" "}</h3>

      <div class="row mt-5">
        <div class="col-3">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Thông tin tài khoản</a>
            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Khóa học của tôi</a>

          </div>
        </div>
        <div class="col-9">
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><HomeGuest /></div>
            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, soluta! Vitae iure fugit tenetur tempora inventore id esse odio ipsam accusantium dolorem! Atque repudiandae quia maiores vel ipsum quidem. Maiores eaque nostrum, cupiditate culpa neque praesentium, id quas itaque eveniet pariatur quia animi molestiae quasi facilis officiis soluta nesciunt. Odit expedita voluptatibus tenetur natus obcaecati, saepe dolor cupiditate blanditiis sed magnam incidunt, nemo quae voluptatum mollitia maiores? Labore accusantium quo minus atque dolores, exercitationem sed esse accusamus ad. Beatae veniam rem sequi impedit ipsam quis iusto facere molestias hic recusandae quod natus nobis, ab doloribus tempore excepturi, consequatur voluptatem delectus!</div>

          </div>
        </div>
      </div>
    </Page>
  )
}

export default Home