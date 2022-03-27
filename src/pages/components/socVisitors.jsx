import React from 'react'
import {Container, Heading1, Heading5} from '../../styles/soc-members'
import * as Vstyle from '../../styles/visitor-style'
import Images from '../../images' 
const SocVisitors = () => {
  return (
    <>
      <Container>
      <Heading1>Siddhachal Flats</Heading1>
      <Heading5>Society Admin: <span style={{fontStyle: "italic", fontWeight: "400", textDecoration: "underline", textDecorationColor: "#FAB6B6"}}>Patel Manikbhai</span></Heading5>
      </Container>
      <Vstyle.Container>
          <Vstyle.Item>
            <Vstyle.UserImage style={{backgroundImage: `url(${Images.Testimonial_Image1})`, backgroundSize: 'cover'}}/>
            <h5>Sidhraj Mori</h5>
            <Vstyle.Heading6>House Visited: <span style={{fontStyle: "italic", textDecoration: "underline", textDecorationColor:"#fab6b6"}}>A-204</span></Vstyle.Heading6>
            <Vstyle.Heading6>Last Visited On: <span style={{fontStyle: "italic"}}>23/2/2022</span></Vstyle.Heading6>
          </Vstyle.Item>
          <Vstyle.Item>
            <Vstyle.UserImage style={{backgroundImage: `url(${Images.Testimonial_Image1})`, backgroundSize: 'cover'}}/>
            <h5>Kavyesh Vohra</h5>
            <Vstyle.Heading6>House Visited: <span style={{fontStyle: "italic", textDecoration: "underline", textDecorationColor:"#fab6b6"}}>A</span></Vstyle.Heading6>
            <Vstyle.Heading6>Last Visited On: <span style={{fontStyle: "italic"}}>23/2/2022</span></Vstyle.Heading6>
          </Vstyle.Item>
          <Vstyle.Item>
            <Vstyle.UserImage style={{backgroundImage: `url(${Images.Testimonial_Image1})`, backgroundSize: 'cover'}}/>
            <h5>Sidhraj Mori</h5>
            <Vstyle.Heading6>Resident Visited: <span style={{fontStyle: "italic", textDecoration: "underline", textDecorationColor:"#fab6b6"}}>Aastha Arora</span></Vstyle.Heading6>
            <Vstyle.Heading6>Last Visited On: <span style={{fontStyle: "italic"}}>23/2/2022</span></Vstyle.Heading6>
          </Vstyle.Item>
          <Vstyle.Item>
            <Vstyle.UserImage style={{backgroundImage: `url(${Images.Testimonial_Image1})`, backgroundSize: 'cover'}}/>
            <h5>Kavyesh Vohra</h5>
            <Vstyle.Heading6>Resident Visited: <span style={{fontStyle: "italic", textDecoration: "underline", textDecorationColor:"#fab6b6"}}>Aastha Arora</span></Vstyle.Heading6>
            <Vstyle.Heading6>Last Visited On: <span style={{fontStyle: "italic"}}>23/2/2022</span></Vstyle.Heading6>
          </Vstyle.Item>
          <Vstyle.Item>
            <Vstyle.UserImage style={{backgroundImage: `url(${Images.Testimonial_Image1})`, backgroundSize: 'cover'}}/>
            <h5>Sidhraj Mori</h5>
            <Vstyle.Heading6>House Visited: <span style={{fontStyle: "italic", textDecoration: "underline", textDecorationColor:"#fab6b6"}}>A</span></Vstyle.Heading6>
            <Vstyle.Heading6>Last Visited On: <span style={{fontStyle: "italic"}}>23/2/2022</span></Vstyle.Heading6>
          </Vstyle.Item>
          <Vstyle.Item>
            <Vstyle.UserImage style={{backgroundImage: `url(${Images.Testimonial_Image1})`, backgroundSize: 'cover'}}/>
            <h5>Kavyesh Vohra</h5>
            <Vstyle.Heading6>House Visited: <span style={{fontStyle: "italic", textDecoration: "underline", textDecorationColor:"#fab6b6"}}>A</span></Vstyle.Heading6>
            <Vstyle.Heading6>Last Visited On: <span style={{fontStyle: "italic"}}>23/2/2022</span></Vstyle.Heading6>
          </Vstyle.Item>
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