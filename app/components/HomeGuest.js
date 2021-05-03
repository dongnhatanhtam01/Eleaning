import React, { useContext, useEffect } from "react"
import Page from "./Page"
import Axios from "axios"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import { withRouter } from "react-router-dom"
import CoursesRegist from "../common/components/CourseRegist"

const buttonStyle = { display: "inlineBlock", textDecoration: "none" }

function HomeGuest(props) {
 const appState = useContext(StateContext)
 const appDispatch = useContext(DispatchContext)
 useEffect(() => {
  const ourRequest = Axios.CancelToken.source()
  async function getCourse() {
   try {
    const response = await Axios.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01", { cancelToken: ourRequest.token })
    if (response.data) {
     appDispatch({ type: "GET_COURSES", data: [...response.data] })
    }
   }
   catch (e) {
    console.log("This must be error...");
   }
  }
  getCourse()

  return () => {
   ourRequest.cancel()
  }
 }, [])

 function passCourseCode(itemCode) {
  console.log(itemCode);
  /*appDispatch({ type: "GET_COURSE_DETAILS", data: {itemCode} })*/
  props.history.push(`/chitiet/${itemCode}`)
 }
 const callbackFunction = (childData) => {
  alert(childData)
 }
 // check object existed in array
 function handleCheck(checkArgs) {
  console.log(appState.account.chiTietKhoaHocGhiDanh.some(item => checkArgs.maKhoaHoc === item.maKhoaHoc));
  return appState.account.chiTietKhoaHocGhiDanh.some(item => checkArgs.maKhoaHoc === item.maKhoaHoc)
 }
 // regist courses 
 async function courseRegist(maKhoaHoc) {
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
 function handleCourseRegist(val) {
  if (handleCheck(val)) {
   alert("this is existed!")
  }
  else {
   courseRegist(val.maKhoaHoc)
  }
 }


 return (
  <Page title="Home Guest" wide={true}>
   <div className="row home_container " style={{ alignItems: 'baseline' }}>
    {appState.courses.map((item, index) => {
     return (
      <div className="card-deck col-3" key={index} style={{ minHeight: '200px', marginLeft: "0", marginRight: "0" }}>
       <div className="card p-2 border-warning"
        style={{ height: "400px", maxWidth: '100%', minHeight: '350px', marginBottom: '35px', minWidth: '250px', flex: '1 1 auto' }}
       >
        <img className="card-img-top" src={item.hinhAnh} alt="Card image cap" style={{ maxWidth: '100%', minHeight: '200px', height: '200px' }} onError={i => i.target.src = 'https://picsum.photos/200/300'} />
        <div className="card-block">
         <p className="card-title">{(item.tenKhoaHoc.length > 10) ? `${item.moTa.substring(0, 25) + "..."}` : item.tenKhoaHoc}{" "} </p>
         <button
          onClick={() => { passCourseCode(item.maKhoaHoc) }}
          className="btn btn-primary btn-sm mr-2"
          style={buttonStyle}
          href="#"><i className="fa fa-ellipsis-v" aria-hidden="true"></i><span className="mr-2"> </span> Chi tiết
          </button>
         {/* <CoursesRegist dataFromParent={item} parentCallback={callbackFunction} /> */}
         <button
          onClick={() => { handleCourseRegist(item) }}
          className="btn btn-dark btn-sm mr-2 "
          style={buttonStyle}
          href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i>
         </button>
         <small className="card-text mt-2" style={{ maxWidth: '100%', maxHeight: '100px', overflow: "hidden", display: "block" }} >{(item.moTa.length > 30) ? `${item.moTa.substring(0, 100) + "..."}` : item.moTa}</small>
         <div className="card-footer" style={{
          width: "100%",
          position: "absolute",
          bottom: "0",
          marginBottom: "0",
          transform: "translateX(-12px)"
         }}>
          <small className="text-muted">{item.ngayTao}</small>
         </div>
        </div>
       </div>
      </div>
     )
    })}
   </div>
  </Page>
 )
}
{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
           <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" />
          </svg> */}
export default withRouter(HomeGuest)