import React from "react"
import Card from "./Card"
import styled from "styled-components"
import Advertising from "../images/megaphone.png"
import List from "../images/list.png"
import Phone from "../images/phone-message.png"
import Schedule from "../images/schedule.png"

const StyledCards = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;
  @media (min-width: 570px) {
    align-items: start;
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
  }
`

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
const Cards = React.memo(() => {
  console.log("rendered")
  return (
    <StyledCards>
      {cards.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </StyledCards>
  )
})

export default Cards
