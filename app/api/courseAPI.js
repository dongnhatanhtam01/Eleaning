import axiosClient from "./axiosClient"

class CourseAPI {
 getAll  (params)  {
  const url = '/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc'
  return axiosClient.get(url, {params})
 }
}

const courseAPI = new CourseAPI()
export default courseAPI