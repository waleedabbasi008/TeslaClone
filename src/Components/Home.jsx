import React from 'react'
import styled from 'styled-components';
import Section from './Section';
const Container = styled.div`
height: 100vh;

`
const Home = () => {
  return (
    <>
      <Container>      
        <Section
          title="Model S"
          description="Order online for the touchless delivery"
          backgrounfImg="/images/model-s.jpg"
          leftButton="Custom order"
          rightButton="Existing Inventory"
          goto = "models"

        />
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgrounfImg="/images/model-y.jpg"
          leftButton="Custom order"
          rightButton="Existing Inventory"
          goto = "modely"
        />
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgrounfImg="/images/model-3.jpg"
          leftButton="Custom order"
          rightButton="Existing Inventory"
          goto = "model3"
        />
        <Section
          title="Model X"
          description="Order online for teh touchless delivery"
          backgrounfImg="/images/model-x.jpg"
          leftButton="Custom order"
          rightButton="Existing Inventory"
          goto = "modelx"
        />
        <Section
          title="Lowest cost solar panel in america"
          description="Money back guarrantee"
          backgrounfImg="/images/solar-panel.jpg"
          leftButton="Order now"
          rightButton="Learn More"
        />
        <Section
          title="Solar for the new roofs"
          description="Solar Roof cost less than a new roof plus solar panels "
          backgrounfImg="/images/solar-roof.jpg"
          leftButton="Order now"
          rightButton="Learn More"
        />
        <Section
          title="Accessories"
          description=" "
          backgrounfImg="/images/accessories.jpg"
          leftButton="Shop now"          
        />
      </Container>
    </>
  )
}

export default Home;