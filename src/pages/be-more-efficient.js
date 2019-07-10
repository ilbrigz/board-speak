import React, { useRef, useState, useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import Notification from "../images/notification.png"
import Puzzle from "../images/puzzle.png"
import { Link } from "gatsby"
import EfficientHero from "../images/efficientHero.js"
import Tag from "../images/tag.png"
import Home from "../images/home.png"
import { endianness } from "os"

const pageTitle = "Spend less time managing information. Get more things done!"
const pageSubtitle = "Replace chaotic group chats & overwhelming email threads!"
const heroSubtitle =
  "Studies say professionals throw important information 90% of the time without reading it!"
const cards = [
  {
    image: Home,
    title: "Customizable Dashboard Display",
    description:
      "a cloud-based visual dashboard you can customize depending on task and goal priority",
  },
  {
    image: Tag,
    title: "Multiple Search Filters",
    description: "Quickly find what you are looking for",
  },
  {
    image: Notification,
    title: "Selective Notification",
    description: "Choose topics you care about and throw away clutter & noise",
  },
  {
    image: Puzzle,
    title: "Plug-ins & Integration Capabilities",
    description: "Streamline your workflow by including the apps you want",
  },
]

const Efficient = props => {
  const [bodyOffset, setBodyOffset] = useState(0)
  const inputRef = useRef(0)
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
        <Layout inputRef={inputRef} offsetY={bodyOffset.y}>
          <SEO title="Home" />
          <Hero
            HeroImage={EfficientHero}
            inputRef={inputRef}
            location={props.location}
            pageSubtitle={pageSubtitle}
            heroSubtitle={heroSubtitle}
            pageTitle={pageTitle}
          />
          <Cards cards={cards} />
          <Link
            to="/engage-with-customers"
            style={{
              color: "#316aaf",
              alignSelf: "flex-end",
              margin: "1rem 0",
              padding: ".5rem",
              backgroundColor: "#FFD400",
            }}
          >
            Engage with Customers &rarr;
          </Link>
        </Layout>
      </div>
    </>
  )
}
export default Efficient
