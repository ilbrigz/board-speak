import React from "react"
import styled from "styled-components"
import SvgImage from "../images/mobile-marketing"
import Zoom from "react-reveal"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardBody = styled.div`
  align-items: center;
  p,
  h3 {
    text-align: center;
  }
`
const StyledImage = styled.img`
  max-width: 100px;
  @media (min-width: 570px) {
    max-width: 150px;
  }
`

export default function Card({ image, title, description }) {
  return (
    <StyledCard>
      <StyledImage src={image} />
      <CardBody>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardBody>
    </StyledCard>
  )
}
