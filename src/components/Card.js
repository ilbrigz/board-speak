import React from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"

const StyledCard = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardBody = styled.div`
  align-items: center;
  p,
  h3 {
    color: rgb(92, 92, 94);
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
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })
  const springProps = useSpring({
    config: {
      duration: 1000,
    },
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
  })
  return (
    <StyledCard ref={ref} style={springProps}>
      <StyledImage src={image} />
      <CardBody>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardBody>
    </StyledCard>
  )
}
