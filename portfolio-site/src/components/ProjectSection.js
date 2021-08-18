import React from 'react';
import styled from 'styled-components';
//iamges
import project_1 from "../img/project_1.PNG"
import project_2 from "../img/project_2.PNG"
import project_3 from "../img/project_33.PNG"
import {Row, Col, Container} from 'react-bootstrap'

const ProjectSection = () => {
    return(
        <Project>
            <Container fluid="xxl">
            <Row>
                <Col>
                <span>
                <h1>My Recent Work</h1><br/>
                <p>Here are a few design projects I've worked on recently. Want to see more? Email me.</p>
                </span>
                </Col>
            </Row>
            <Row >
                <Col>
                <div class ="aa">
                    <a href= "https://stoic-hamilton-6f1381.netlify.app/"><img src={project_1} alt="dd" /></a>
                </div>
                </Col>
                <Col>
                <div class ="aa">
                    <a href= "https://suspicious-turing-e68bc4.netlify.app/"><img src={project_2} alt="dd" /></a>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div class ="aa">
                    <a href= "https://google.ca"><img src={project_3} alt="dd" /></a>
                </div>
                </Col>
                <Col>
                <div class ="aa"><img src={project_1} alt="dd"/></div>
                </Col>
            </Row>
        </Container>
        </Project>
    )
}

export const Project = styled.div`
    min-height: 90vh;
    display: flex;
    padding: 2rem 4rem;
    color: black;
    background-color: #F3F3F3;
    text-align: center;
    line-height: 1.5;
    .aa{
        padding-bottom: 1rem;
    }
    img{
        border-radius: 25px;
        width:35rem;
        min-height:22rem;
    :hover{
            opacity: 0.8;
            transition: .6s ease;
            cursor: pointer;
            background-color: #008CBA;
            filter: blur(2px);
        }
    }
    @media only screen and (max-width: 650px) {
            img{
                width:55vw;
            }
        }
`;





export default ProjectSection;