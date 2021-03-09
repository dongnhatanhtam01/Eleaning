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
      <div className="row">

        {appState.courses.map((item) => {
          return (
            <div className="card-deck col-3"  style={{ height: '400px' }}>
              <div className="card"
               style={{ maxWidth: '100%', minHeight: '300px', margin: '5px' }}
              >
                <img className="card-img-top" src={item.hinhAnh} alt="Card image cap" style={{ maxWidth: '100%', minHeight: '200px', height:'200px' }} />
                <div className="card-block">
                  <h4 className="card-title">{item.tenKhoaHoc}</h4>
                  <p className="card-text" style={{ maxWidth: '100%', minHeight: '200px', height:'150px' }} >{item.moTa}</p>
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