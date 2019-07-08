import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import Hero from "../components/Hero"
import Cards from "../components/Cards"

const IndexPage = () => {
  const [bodyOffset, setBodyOffset] = useState(0)
  const listener = e => {
    setBodyOffset(document.body.getBoundingClientRect())
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
