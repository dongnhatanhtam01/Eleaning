import React, { useEffect, useContext } from "react"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"
const buttonStyle = { display: "inlineBlock", textDecoration: "none" }

function CoursesRegist(props) {
 const appState = useContext(StateContext)
 const appDispatch = useContext(DispatchContext)
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
   // if (response.data) {
   //  appDispatch({
   //   type: "GET_COURSE_DETAILS", data: { ...response.data }
   //  })
   // }
  }
  catch (e) {
   console.log("This must be some errors!");
  }}

  function sendData() {
   props.parentCallback("Đã chọn vào nút thêm...")
   handleCourseRegist(props.dataFromParent.maKhoaHoc)
  }
  return (
   <button
    onClick={() => { handleCourseRegist(props.dataFromParent.maKhoaHoc) }}
    className="btn btn-dark btn-sm mr-2 "
    style={buttonStyle}
    href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i>x
   </button>
  )
 }

 export default CoursesRegist