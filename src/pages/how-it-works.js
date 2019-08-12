import React, { useEffect, useState } from "react"
import Menu from "../components/Menu"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HowItWorks = props => {
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
      <Menu offsetY={bodyOffset.y} location={props.location.pathname} />
      <div id="page-wrap">
        <Layout>
          <SEO title="How it works" />
          <h1 style={{ marginTop: "8rem" }}>How it Works</h1>
          <p>
            1. CREATING GROUP BOARD Get your group on the same board! Create a
            visual bulletin board for your group’s organized communication
            (public announcements and private discussions), and experience
            deeper member engagements. It’s FREE!
          </p>
          <p>
            2. CREATE POSTS UNDER RELEVANT TOPICS Make FOMO a thing of the past.
            Filter messages, share photos, files and links into relevant topics,
            so users may only view or read what’s important to them. Stop chaos
            and noise in your board by categorizing everyone’s posts and
            contents by topics.
          </p>
          <p>
            3. TOPIC PRIVACY SETTINGS (for internal communication) Shh! What
            happens in Vegas stays in Vegas! That’s right, there are just some
            things that the world doesn’t need to know. BoardSpeak allows you to
            set some Topics in a private mode that only select members can view.
          </p>
          <p>
            4. ADDING MEMBERS & ROLE ASSIGNMENTS I am Batman. You are Robbin.
            You get the drift right? Not everyone gets to be a superhero though.
            When adding Members, assign who gets to be Admin Member/s, Members &
            mere followers. You as creator of the board is the Super Admin (the
            almighty who can delete a topic, remove members, etc).{" "}
          </p>
          <p>
            5. SELECT YOUR NOTIFICATIONS Get notified on Topics that are
            important to you and easily find information that you Created,
            Followed, and Starred in your Dashboard.{" "}
          </p>
          <p>
            6. CREATE EVENT Is everyone invited or just a select few? You get to
            choose. It’s your party!
          </p>
          7. CREATE / ASSIGN TASKS There’s no “I” in team! Accomplishing tasks
          doesn’t have to be a one man show. Team members can readily create and
          view assigned tasks in their respective dashboards. No more excuses
          just checked boxes.
          <p>
            8. TRACK YOUR MESSAGES You don’t have to be 007 or the CIA just to
            know if your messages were received. Easily track messages if they
            were read or acted upon.
          </p>
        </Layout>
      </div>{" "}
    </>
  )
}

export default HowItWorks
