import React from 'react';
import styled from 'styled-components';
import avatar from "../img/avatar_3.svg"
import computer from "../img/computer.svg"
import {Row, Col, Container} from 'react-bootstrap'

const MainSection = () => {
  
    return(
        <About>
            <Container fluid="md">
            <Row>
                <Col>
                    <MainText>
                        <h1>Front-end Developer, Designer & Researcher</h1>
                    </MainText>
                </Col>
            </Row>
            <Row>
                <Col>
                    <MainText>
                        <h4>I design and code beautifully simple things, and I love what I do.</h4>
                    </MainText>
                </Col>
            </Row><Row>
                <Col>
                    <MainText>
                        <img src={avatar} alt="dd"/>
                    </MainText>
                    <div class="loader">

  <div class="drops">
    <div class="drop1"></div>
    <div class="drop2"></div>  
  </div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="liquid">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
    </filter>
  </defs>
</svg>
                        {/* <div id="container">
                            <p class="text">DROP IN</p>
                        <div class="underDrop"></div>
                    </div> */}
                </Col>
            </Row>
            </Container>
        </About>
    )
}

const MainText = styled.div`
    justify-content: center;
    display: flex;
    text-align: center;
    h1{
        font-family: 'Ubuntu', sans-serif;
        padding-top: 5.5rem;
        font-size: 3rem;
        justify-content: center;
        @media(max-width: 600px){
            font-size: 1.5rem;
        }
        
    }
    h4{
        padding-top:2rem;
    }
    img{
        padding:2rem;
    }
`
export const About = styled.div`
    min-height: 48rem;
    display: flex;
    padding: 0rem 10rem;
    color: black;
    @media(max-width:600px){
        padding: 0rem 3rem;
    }
    
`;

const MainText1 = styled.div`
    justify-content: center;
    display: flex;
    img{
        padding-top:6rem;
    }
    @media only screen and (max-width: 650px) {
        img{
          width:95vw;
        }
      }
`

export default MainSection;