import React, { useContext, useEffect } from "react"
import Page from "./Page"
import Axios from "axios"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function HomeGuest() {
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

 return (
  <Page title="Home Guest" wide={true}>
   <div className="row ">

    {appState.courses.map((item, index) => {
     return (
      <div className="card-deck col-3" key={index} style={{ minHeight: '200px', marginLeft: "0", marginRight: "0" }}>
       <div className="card"
        style={{ height: "400px", maxWidth: '100%', minHeight: '350px', margin: '5px' }}
       >
        <img className="card-img-top" src={item.hinhAnh} alt="Card image cap" style={{ maxWidth: '100%', minHeight: '200px', height: '200px' }} onError={i => i.target.src='https://picsum.photos/200/300'}  />
        <div className="card-block">
         <h4 className="card-title">{(item.tenKhoaHoc.length > 10) ? `${item.moTa.substring(0, 10) + "..."}` : item.tenKhoaHoc}</h4> <a style={{display: "inlineBlock"}} href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" />
         </svg> Xem chi tiết</a>
         <p className="card-text" style={{ maxWidth: '100%', maxHeight: '100px', overflow: "hidden" }} >{(item.moTa.length > 30) ? `${item.moTa.substring(0, 30) + "..."}` : item.moTa}</p>
         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
       </div>
      </div>

     )
    })}
   </div>
  </Page>
 )
}

export default HomeGuest