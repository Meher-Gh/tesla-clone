import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online For Toucheless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section 
                title="Model Y"
                description="Order Online For Toucheless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section 
                title="Model 3"
                description="Order Online For Toucheless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section 
                title="Model X"
                description="Order Online For Toucheless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section 
                title="Lowest Cost Solar Panel in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="ORDER Now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Then a New Noof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="ORDER Now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Accessories"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />

        </Container>
    )
}

export default Home
const Container = styled.div`
    height: 100vh;
`