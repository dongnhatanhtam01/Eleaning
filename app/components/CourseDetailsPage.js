import React, { useEffect, useContext, useState } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

const courseDescription = {
 position: "absolute",
 top: "30%",
 zIndex: "2"
}
const styleRectangle = {
 padding: "1rem",
 borderRadius: "15px",
 height: "100%",
 maxHeight: "200px",
 width: "400px",
 background: "rgb(255, 255, 255, 0.8)",
 zIndex: "1",
 position: "absolute",
 top: "20%",
 left: "25%"
}

const styleObject = {
 position: 'relative',
 opacity: ".8",
 textAlign: "center",
 background: "black",
 color: "white",
 fontSize: "30px",
 maxHeight: "500px",
 height: "1000px",
 marginTop: "0",
 backgroundImage: `url("../assets/img/banner.jpg")`, /* The image used */
 backgroundColor: "#cccccc", /* Used if the image is unavailable */
 backgroundPosition: "center", /* Center the image */
 backgroundRepeat: "no-repeat", /* Do not repeat the image */
 backgroundSize: "cover", /* Resize the background image to cover the entire container */
}
const textAlign = {
 textAlign: 'left',
 color: "black"
}
const span = {
 fontSize: "15px",
 color: "black",
 display: "inline-block",
 float: "left",
 marginRight: "10px"
}
const star = {
 color: "#ffc107",
 display: "inline-block",
 float: "left",
}
function CourseDetailsPage() {
 const appDispatch = useContext(DispatchContext)
 const appState = useContext(StateContext)

 const { maKhoaHoc } = useParams()
 useEffect(() => {
  const ourRequest = Axios.CancelToken.source()
  async function fetchPost() {
   try {
    const response = await Axios.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`, { cancelToken: ourRequest.token })
    console.log(response.data);
    if (response.data) {
     appDispatch({
      type: "GET_COURSE_DETAILS", data: { ...response.data }
     })
    }
   }
   catch (e) {
    console.log("This must be some errors!");
   }
  }
  fetchPost()
  return () => {
   ourRequest.cancel()
  }
 }, [])

 async function handleCourseRegist(maKhoaHoc) {
  try {
   const response = await Axios.post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`, {
    maKhoaHoc,
    "taiKhoan": appState.user.taiKhoan
   }, {
    headers: {
     'Authorization': `Bearer ${appState.user.accessToken}`
    }
   })
   if (response.data) {
    appDispatch({
     type: "GET_COURSE_DETAILS", data: { ...response.data }
    })
   }
  }
  catch (e) {
   console.log("This must be some errors!");
   alert(e.response.data)
  }

 }

 return (
  <div>
   <div className="course__banner" style={styleObject}>
    <div style={styleRectangle}>
     <div className="course__descriptions" style={courseDescription}>
      <h3 style={textAlign}>{appState.courseDetails.tenKhoaHoc}</h3>
      <span align="left" style={span}>Đánh giá khóa học</span>
      <div style={star}>
       <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
      </div><br />
      <button
       onClick={() => { handleCourseRegist(appState.courseDetails.maKhoaHoc) }}
       style={span}
       className="btn btn-sm btn-warning">Đăng ký</button>
     </div>
    </div>
   </div>

   <section className="container " style={{ position: "relative", height: "100vh", maxHeight: "500px" }}>
    <h1>Giới thiệu khóa học</h1>
    <small>lượt xem: {appState.courseDetails.luotXem}</small>
    <p>{appState.courseDetails.moTa}</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis voluptas doloremque, iusto ipsa quidem ipsam mollitia eveniet! Nam, sed. Impedit nam non quasi ducimus esse officia eos accusantium dolores reiciendis. Nemo, quod, ipsum ducimus autem sunt facilis delectus ut eum quos illum quidem nesciunt modi assumenda veniam saepe labore, commodi debitis. In cupiditate optio doloribus est eveniet quia deserunt eius, ullam aliquid, adipisci saepe. Consequuntur, unde id quibusdam, repellendus vitae eos delectus nulla omnis neque architecto pariatur cum voluptas sed quam aut aspernatur corporis dignissimos rerum nisi ut dolorum officia! Nobis veritatis sunt corporis nemo earum deserunt id alias facilis?
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vitae necessitatibus iure provident. Corporis harum quia, incidunt porro fugiat, quis quos velit iusto consequuntur sed laudantium cum voluptas adipisci deleniti asperiores voluptatum vitae natus similique unde! Dicta sed sit accusamus tempore natus! Sit illo, ad ducimus consectetur, ut laboriosam laudantium repudiandae in totam sint tenetur, quibusdam odit veritatis aspernatur a incidunt. Id debitis libero ea exercitationem, excepturi tempore aspernatur sunt reprehenderit nihil perspiciatis fugiat accusantium ad veritatis labore necessitatibus sit ab doloremque minus nulla aperiam soluta 
    </p>
   </section>
  </div>
 )
}

export default CourseDetailsPage