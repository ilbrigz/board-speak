import React from "react"
import Card from "./Card"
import styled from "styled-components"

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

const Cards = React.memo(({ cards }) => {
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
