import React from "react"
import Header from "./Header"
import "./layout.css"

const Layout = ({ children, inputRef, offsetY }) => {
  return (
    <>
      <Header offsetY={offsetY} color="red" inputRef={inputRef} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main style={{ display: "flex", flexDirection: "column" }}>
          {children}
        </main>
        <footer
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p className="serif" style={{ color: "rgb(92, 92, 94)" }}>
            © {new Date().getFullYear()},{" "}
            <a
              href="#"
              style={{ color: "rgb(92, 92, 94)", textDecoration: "none" }}
            >
              {" "}
              BoardSpeak
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
