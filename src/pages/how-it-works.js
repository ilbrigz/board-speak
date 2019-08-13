import React, { useEffect, useState } from "react"
import Menu from "../components/Menu"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { relative } from "path"
import { GiTeamIdea } from "react-icons/gi"
import { IoIosCreate, IoIosNotifications } from "react-icons/io"
import { FaShieldAlt, FaAddressBook, FaTasks, FaSitemap } from "react-icons/fa"
import { MdEventAvailable } from "react-icons/md"

const Card = styled.div`
  background-color: #8ccda8;
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 5rem;
  position: relative;

  align-items: center;
  @media (max-width: 440px) {
    flex-direction: column;
  }
  h3 {
    color: #ffffff;
    text-align: center;
  }
  div {
    min-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
    @media (max-width: 440px) {
      margin-right: 0;
      min-width: 100%;
    }
    svg {
      // border: 3px solid #316aaf;
      font-size: 4rem;
      color: #316aaf;
      background-color: white;
      padding: 0.5rem;
      border-radius: 3rem;
      margin-bottom: 0.5rem;
    }
  }
`
const Cards = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`
const StyledNum = styled.span`
  color: #316aaf;
  font-size: 4rem;
  opacity: 0.8;
  position: absolute;
  top: -68px;
  left: 1rem;
  @media (max-width: 480px) {
    top: -60px;
  }
`

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
        <Layout offsetY={bodyOffset.y}>
          <SEO title="How it works" />
          <h2
            style={{
              paddingTop: "8rem",
              fontSize: "2rem",
            }}
          >
            How it Works
          </h2>
          <Cards>
            <Card>
              <div>
                <div>
                  <GiTeamIdea />
                </div>
                <h3>
                  <StyledNum>1.</StyledNum> CREATING GROUP BOARD Get your group
                  on the same board!
                </h3>
              </div>
              <p>
                Create a visual bulletin board for your group’s organized
                communication (public announcements and private discussions),
                and experience deeper member engagements. It’s FREE!
              </p>
            </Card>
            <Card>
              {" "}
              <div>
                <div>
                  <IoIosCreate />
                </div>
                <h3>
                  {" "}
                  <StyledNum>2.</StyledNum> CREATE POSTS UNDER RELEVANT TOPICS{" "}
                </h3>
              </div>
              <p>
                Make FOMO a thing of the past. Filter messages, share photos,
                files and links into relevant topics, so users may only view or
                read what’s important to them. Stop chaos and noise in your
                board by categorizing everyone’s posts and contents by topics.
              </p>
            </Card>
            <Card>
              {" "}
              <div>
                <div>
                  <FaShieldAlt />
                </div>
                <h3>
                  <StyledNum>3.</StyledNum> TOPIC PRIVACY SETTINGS (for internal
                  communication)
                </h3>
              </div>
              <p>
                Shh! What happens in Vegas stays in Vegas! That’s right, there
                are just some things that the world doesn’t need to know.
                BoardSpeak allows you to set some Topics in a private mode that
                only select members can view.
              </p>
            </Card>
            <Card>
              <div>
                <div>
                  <FaAddressBook />
                </div>
                <h3>
                  <StyledNum>4.</StyledNum> ADDING MEMBERS & ROLE ASSIGNMENTS
                </h3>
              </div>
              <p>
                I am Batman. You are Robbin. You get the drift right? Not
                everyone gets to be a superhero though. When adding Members,
                assign who gets to be Admin Member/s, Members & mere followers.
                You as creator of the board is the Super Admin (the almighty who
                can delete a topic, remove members, etc).{" "}
              </p>
            </Card>
            <Card>
              <div>
                <div>
                  <IoIosNotifications />
                </div>
                <h3>
                  <StyledNum>5.</StyledNum> SELECT YOUR NOTIFICATIONS
                </h3>
              </div>
              <p>
                Get notified on Topics that are important to you and easily find
                information that you Created, Followed, and Starred in your
                Dashboard.{" "}
              </p>
            </Card>
            <Card>
              {" "}
              <div>
                <div>
                  <MdEventAvailable />
                </div>
                <h3>
                  <StyledNum>4.</StyledNum> CREATE EVENT
                </h3>
              </div>
              <p>
                Is everyone invited or just a select few? You get to choose.
                It’s your party!
              </p>
            </Card>
            <Card>
              {" "}
              <div>
                <div>
                  <FaTasks />
                </div>
                <h3>
                  <StyledNum>7.</StyledNum> CREATE / ASSIGN TASKS
                </h3>
              </div>
              <p>
                There’s no “I” in team! Accomplishing tasks doesn’t have to be a
                one man show. Team members can readily create and view assigned
                tasks in their respective dashboards. No more excuses just
                checked boxes.
              </p>
            </Card>
            <Card style={{ marginBottom: 0 }}>
              <div>
                <div>
                  <FaSitemap />
                </div>
                <h3>
                  <StyledNum>8.</StyledNum> TRACK YOUR MESSAGES{" "}
                </h3>
              </div>
              <p>
                You don’t have to be 007 or the CIA just to know if your
                messages were received. Easily track messages if they were read
                or acted upon.
              </p>
            </Card>
          </Cards>
        </Layout>
      </div>{" "}
    </>
  )
}

export default HowItWorks
