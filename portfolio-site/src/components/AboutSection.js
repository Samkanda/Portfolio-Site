import React from 'react'
import styled from 'styled-components';
import {Row, Col, Container} from 'react-bootstrap';

const AboutSection = () => {
    return (
        <About id="about">
            <Container fluid="md">
            <Row>
            <Col></Col>
                <Col xs={8}>
                    <MainText>
                        <h1>Hi, I’m Navpreet. Nice to meet you.</h1>
                    </MainText>
                </Col>
                <Col></Col>
            </Row>
            <Row>
            <Col></Col>
                <Col xs={8}>
                    <MainText>
                        <p>
                            Since beginning my journey years ago, I've went to College & University, worked on starups, 
                            and developed a series of projects to keep improving my skills. I'm quietly confident, naturally curious, 
                            and perpetually working on improving my chops one design problem at a time.
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
    min-height: 60vh;
    background-color: #7510F7;
    display: flex;
    padding: 0rem 10rem;
    color: white;
    @media only screen and (max-width: 1150px) {
        padding: 0rem 0rem;
        padding-bottom: 12rem;
      }
`;

const MainText = styled.div`
    justify-content: center;
    display: flex;
    text-align: center;
    h1{
        padding-top: 8rem;
        font-size: 2rem;
        color: white;
        justify-content: center;
    }
    padding-top:1rem;

`;

export default AboutSection;