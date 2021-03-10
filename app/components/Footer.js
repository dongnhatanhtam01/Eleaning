import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="border-top text-center small text-muted py-3 fixed-bottom bg-light">
      <p>
        <Link to="/" className="mx-1">
          Trang chủ
          </Link>{" "}
          |{" "}
        <Link className="mx-1" to="/gioithieu">
          Giới thiệu
          </Link>{" "}
          |{" "}
        <Link className="mx-1" to="/dieukhoan">
          Điều khoản
          </Link>
      </p>
      <p className="m-0">
        Copyright &copy; 2021{" "}
        <Link to="/" className="text-muted">
          Elearning Application
          </Link>
          . All rights reserved.
        </p>
    </footer>
  )
}

export default Footer