import React from 'react'
import styled from "styled-components"
import Header from './Header'
import Section from './Section'


function Home() {
  return (
    <Container>
        <Header />
        <Section 
            title="Model S"
            description="Order Online For Touchless Delivery"
            backgroundIMG="model-s.jpg"
            leftBtnText="Custom Oder"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model 3"
            description="Order Online For Touchless Delivery"
            backgroundIMG="model-3.jpg"
            leftBtnText="Custom Oder"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model x"
            description="Order Online For Touchless Delivery"
            backgroundIMG="model-x.jpg"
            leftBtnText="Custom Oder"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model y"
            description="Order Online For Touchless Delivery"
            backgroundIMG="model-y.jpg"
            leftBtnText="Custom Oder"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Lowest Cost Solar Pannel in America"
            description="Money Back Guarantee"
            backgroundIMG="solar-panel.jpg"
            leftBtnText="Custom Oder"
            rightBtnText="Learn More"
        />
        <Section
            title="Solar For New Roof"
            description="Solar Roof Cost Less Then A New Roof + Solar Pannels"
            backgroundIMG="solar-panel.jpg"
            leftBtnText="Oder Now"
            rightBtnText="learn more"
        />
        <Section
            title="Solar For New Roof"
            description=""
            backgroundIMG="accessories.jpg"
            leftBtnText="Oder Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
        height: 100vh;
`