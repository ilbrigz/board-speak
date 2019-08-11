import React, { useRef, useState, useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import SMS from "../images/sms.png"
import Shopping from "../images/shopping.png"
import { Link } from "gatsby"
import EngageHero from "../images/engageHero.js"
import Chat from "../images/chat.png"
import Id from "../images/id-card.png"
import { endianness } from "os"

const pageTitle =
  "Engage & retain customers with positive sentiment towards your brand"
const pageSubtitle = "Promote your brand and sell your products"
const heroSubtitle =
  "Get early access and exclusive in app perks, by signing up before our official launch!"
const cards = [
  {
    image: Id,
    title: "White Labeling Social Collaboration",
    description:
      "Build brand visibility and extend customer react with visual & interactive bulleting board",
  },
  {
    image: Chat,
    title: "AI Chatbots",
    description:
      "Automate customer service to immediately reply to customer queries even when everyone is busy",
  },
  {
    image: SMS,
    title: "Push Promo Notification",
    description:
      "SMS automation is an option for those who are not connected to the internet",
  },
  {
    image: Shopping,
    title: "Ecommerce",
    description: "Boost sales with targeted audience in Community Marketplace",
  },
]

const Engage = props => {
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
          <SEO title="Retain customers" />
          <Hero
            HeroImage={EngageHero}
            inputRef={inputRef}
            location={props.location}
            pageSubtitle={pageSubtitle}
            heroSubtitle={heroSubtitle}
            pageTitle={pageTitle}
          />
          <Cards cards={cards} />
          <button
            onClick={() => inputRef.current.focus()}
            style={{
              color: "#316aaf",
              alignSelf: "flex-end",
              margin: "1rem 0",
              padding: ".5rem",
              backgroundColor: "#FFD400",
            }}
          >
            Sign Up for Beta Now &rarr;
          </button>
        </Layout>
      </div>
    </>
  )
}
export default Engage
