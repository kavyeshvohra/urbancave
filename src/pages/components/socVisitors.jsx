import React from 'react'
import {Container, Heading1, Heading5} from '../../styles/soc-members'
import * as Vstyle from '../../styles/visitor-style'
const SocVisitors = () => {
  return (
    <>
      <Container>
      <Heading1>Siddhachal Flats</Heading1>
      <Heading5>Society Admin: <span style={{fontStyle: "italic", fontWeight: "400", textDecoration: "underline", textDecorationColor: "#FAB6B6"}}>Patel Manikbhai</span></Heading5>
      </Container>
      <Vstyle.Container>
        <VisitorCard heading="Aastha Arora"/>
        <VisitorCard heading="Kavyesh Vohra"/>
        <VisitorCard heading="Aaastha"/>
      </Vstyle.Container>
    </>
  )
}

const VisitorCard = (props) => {
  return (
      <>
          <Vstyle.Item>
              <Vstyle.Title>{props.heading}</Vstyle.Title>
          </Vstyle.Item>
      </>
  )
}

export default SocVisitors