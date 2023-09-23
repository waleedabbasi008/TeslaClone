import React from 'react'
import { Fade } from 'react-reveal';
import styled from 'styled-components';
const Wrap = styled.div`
width: 100vw;
height: 100vh;
z-index: 0;
background: orange;
background: ${props => `url("${props.bgImage}")`};
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
`
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
z-index: -1;
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
@media screen and (max-width: 1000px) {
  flex-direction: column;
  
}
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
cursor: pointer;
text-transform: uppercase;
font-size: 12px;
margin: 8px;
`
const RightButton = styled(LeftButton)`
background: #fff;
opacity: 0.65;
color: #333;


`
const DownArrow = styled.img`
margin-top: 20px;
height: 50px;
/* overflow-x: hidden; */
animation: animateDown infinite 1.5s;
margin: auto;

`
const Buttons = styled.div`  
   text-align: center;
`
const Section = (props) => {
  return (
    <>
      <Wrap bgImage={props.backgrounfImg}>
        <Fade up>
          <ItemText>
            <h1 id = {props.goto}> {props.title} </h1>
            <p> {props.description} </p>
          </ItemText>
        </Fade>
        <Buttons>
          <Fade up>
            <ButtonGroup className='btn-group'>
              <LeftButton>
                {props.leftButton}
              </LeftButton>
              {props.rightButton &&     //if rightButton exists then show the left button here the right button doesnot exists so the left button will be disappear
                <RightButton>
                  {props.rightButton}
                </RightButton>
              }



            </ButtonGroup>
          </Fade>
          <DownArrow src="/images/down-arrow.svg" className='down-key' />
        </Buttons>
      </Wrap>
    </>
  )
}

export default Section;