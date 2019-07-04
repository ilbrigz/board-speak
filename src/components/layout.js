import React from "react"
import Header from "./Header.js"
import "./layout.css"

const Layout = ({ children, offsetY }) => {
  return (
    <>
      <Header offsetY={offsetY} color="red" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          © {new Date().getFullYear()},{` `}
          <a href="#">BoarSpeak</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
