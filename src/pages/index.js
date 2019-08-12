import React, { useRef, useState, useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import MobileSvg from "../images/mobile-marketing.js"
import Advertising from "../images/megaphone.png"
import List from "../images/list.png"
import { Link } from "gatsby"
import Phone from "../images/phone-message.png"
import Schedule from "../images/schedule.png"
import { endianness } from "os"

const pageTitle = "Help team members be accountable & meet deadlines"
const pageSubtitle = "let your team get tasks and assignments done on time!"
const heroSubtitle =
  "Get access and exclusive in app perks, by signing up before our official launch!"
const cards = [
  {
    image: Schedule,
    title: "Schedule Manager",
    description:
      "Set an order of priority for assigned tasks with notifications and due dates",
  },
  {
    image: Phone,
    title: "Auto-SMS Features",
    description: "Follow up on deliverable status with feedback tracking",
  },
  {
    image: Advertising,
    title: "Board of Fame Employee Recognition",
    description:
      "Send morale skyrocketing by highlighting performance showing progress with levels of badges",
  },
  {
    image: List,
    title: "Easy-to-use Task Manager",
    description:
      "Instantly delegate the task by turning conversations into actions",
  },
]

const IndexPage = props => {
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
      <Menu offsetY={bodyOffset.y} location={props.location.pathname} />
      <div id="page-wrap">
        <Layout inputRef={inputRef} offsetY={bodyOffset.y}>
          <SEO title="All communications in one place" />
          <Hero
            HeroImage={MobileSvg}
            inputRef={inputRef}
            location={props.location}
            pageSubtitle={pageSubtitle}
            heroSubtitle={heroSubtitle}
            pageTitle={pageTitle}
          />
          <Cards cards={cards} />
          <Link
            to="/be-more-efficient"
            style={{
              color: "#316aaf",
              alignSelf: "flex-end",
              margin: "1rem 0",
              padding: ".5rem",
              backgroundColor: "#FFD400",
            }}
          >
            Become More Efficient &rarr;
          </Link>
        </Layout>
      </div>
    </>
  )
}
export default IndexPage
