import React, { memo } from "react"
import styled from "styled-components"
import { GiTeamIdea } from "react-icons/gi"
const StyledItem = styled.div`
  display: flex;
  flex-direction: ${props => (props.isEven ? "row-reverse" : "row")};
  margin-bottom: 5rem;
  @media (max-width: 950px) {
    padding: 0 2rem;
  }
  @media (max-width: 630px) {
    padding: 0 1rem;
  }
  @media (max-width: 460px) {
    margin-bottom: 3rem;
    flex-direction: column;
  }
  svg {
    position: absolute;
    font-size: 8rem;
    color: rgb(41, 162, 93);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 630px) {
      font-size: 7rem;
    }
    // background-color: #e9f1fe;
    // border-radius: 50%;
    // border: 0.5rem solid #e9f1fe;
  }
  span {
    align-self: center;
    margin-left: auto;
    margin-right: 3rem;
    font-size: 3rem;
    // color: #316aaf;
    font-weight: 500;
    color: rgb(41, 162, 93);
    @media (max-width: 630px) {
      margin-right: 10px;
    }
    @media (max-width: 460px) {
      display: none;
    }
  }
`
const SvgWrapper = styled.div`
  position: relative;
  background-color: #e9f1fe;
  width: 8em;
  margin-right: ${props => (props.isEven ? 0 : "auto")};
  margin-left: ${props => (!props.isEven ? 0 : "auto")};
  height: 8rem;
  border-radius: 50%;
  align-self: center;
  @media (max-width: 630px) {
    margin-left: ${props => (!props.isEven ? 0 : "1.5rem")};
    margin-right: ${props => (props.isEven ? 0 : "1.5rem")};
    width: 7rem;
    height: 7rem;
  }
  @media (max-width: 460px) {
    margin: 0;
    margin-bottom: 2rem;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 500px;
  h2 {
    color: #316aaf;
    span {
      color: rgb(41, 162, 93);
      display: none;
      @media (max-width: 460px) {
        font-size: inherit;
        font-weight: 700;
        display: inline-block;
      }
    }
  }
  p {
    color: #5c5c5e;
  }
  // @media (max-width: 630px) {
  //   margin-left: ${props => (!props.isEven ? 0 : "1.5rem")};
  //   margin-right: ${props => (props.isEven ? 0 : "1.5rem")};
  //   flex-basis: 300px;
  // }
  @media (max-width: 460px) {
    flex-basis: auto;
  }
`
// const Styled
const Item = memo(({ data, index }) => {
  return (
    <StyledItem isEven={index % 2 == 0}>
      <SvgWrapper isEven={index % 2 == 0}>
        <data.icon />
      </SvgWrapper>
      <ContentWrapper>
        <span className="serif">{index + 1}</span>
        <div>
          <h2>
            <span>{index + 1}.</span>
            {data.title}
          </h2>
          <p>{data.body}</p>
        </div>
      </ContentWrapper>
    </StyledItem>
  )
})

export default Item
