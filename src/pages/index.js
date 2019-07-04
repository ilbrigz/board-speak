import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import Hero from "../components/Hero"
import Cards from "../components/Cards"

const IndexPage = () => {
  // const [lastScrollTop, setLastScrollTop] = useState(0)
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  )
  // const [scrollDirection, setScrollDirection] = useState()
  const listener = e => {
    setBodyOffset(document.body.getBoundingClientRect())
    // setLastScrollTop(-bodyOffset.top)
    // setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up")
  }
  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [])

  return (
    <>
      <Menu offsetY={bodyOffset.y} />
      <div id="page-wrap">
        <Layout offsetY={bodyOffset.y}>
          <SEO title="Home" />
          <Hero />
          <Cards />
        </Layout>
      </div>
    </>
  )
}
export default IndexPage
