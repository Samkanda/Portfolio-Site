import React from 'react'
import styled from 'styled-components';
import {Row, Col, Container} from 'react-bootstrap';

const AboutSection = () => {
    return (
        <About className='about-container' id="about">
            <button className='about-button'></button>
            <button className='about-button'></button>
            <Container fluid="md">
            <Row>
            <Col></Col>
                <Col xs={12}>
                    <MainText>
                        <h1>Hi, I’m Navpreet. Nice to meet you.</h1>
                    </MainText>
                </Col>
                <Col></Col>
            </Row>
            <Row>
            <Col></Col>
                <Col xs={12}>
                    <MainText>
                        <p>
                        I’m a professional web developer, with a strong educational background and experience.
                        My latest being Playline, a sports betting site.  
                        I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                        </p>
                    </MainText>
                    
                </Col>
                <Col></Col>
            </Row>
            </Container>
        </About>
    )
}
export const About = styled.div`
    min-height: 30rem;
    background-color: #7510F7;
    display: flex;
    padding: 0rem 10rem;
    color: white;
    @media only screen and (max-width: 1150px) {
        padding: 0rem 0rem;
        /* padding-bottom: 12rem; */
      }
`;

const MainText = styled.div`
    justify-content: center;
    display: flex;
    text-align: center;
    p{
        font-weight: 700;
    }
    h1{
        padding-top: 0rem;
        font-size: 2rem;
        color: white;
        justify-content: center;
        font-weight: 700;
        margin-top: -55px;
        @media(max-width: 600px){
            font-size: 1.3rem;
        }
    }
    

`;

export default AboutSection;