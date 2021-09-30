import React from 'react'
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import pencil from '../img/pencil.svg';
import book from '../img/book.svg';
import webpage from '../img/webpage.svg';
const TableSection = () => {
    return (
        <TableContainer>
            <Table>
            <Row>
            <Col>
                <MainText2>
                <span>
                <img src={pencil} alt="pencil"/>
                <h1>Front-end Developer</h1><br/>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p></span>
                </MainText2>
            </Col>
            <Col>
                <MainText>
                    <span>
                    <img src={book} alt="dd"/>
                    <h1>Back-end Developer</h1><br/>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    </span>
                </MainText>
            </Col>
            <Col>
                <MainText>
                    <span>
                    <img src={webpage} alt="dd"/>
                    <h1>Design/Other Skills</h1><br/>
                    <p> I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    </span>
                </MainText>
            </Col>
            </Row>
            <Row>
            <Col>
                <MainText>
                    <span>
                        <p className ="subtitle">Programming Languages I know:</p> 
                        <p className="subtitleContent">HTML, NodeJS,  React, JS, CSS, Sass, jQuery</p>
                    </span>
                </MainText>
            </Col>
            <Col>
                <MainText>
                    <span>
                        <p className ="subtitle">Programming Languages I know:</p> 
                        <p className="subtitleContent">HTML, React, JS, CSS, Sass, PHP</p>
                    </span>
                </MainText>
            </Col>
            <Col>
                <MainText>
                    <span>
                        <p className ="subtitle">Things I enjoy designing:</p> 
                        <p className="subtitleContent">UX, UI, Web, Mobile, Apps</p>
                    </span>
                </MainText>
            </Col>
            </Row>
            <Row>
            <Col>
                <MainText1 class ="extra">
                    <span>
                        <p className ="subtitle">Dev Tools:</p> 
                        <p>Bootstrap</p>
                        <p>Visual Studio Code</p>
                        <p>Github</p>
                        <p>MaterialUI</p>
                        <p>Chrome Dev Tools</p>
                    </span>
                </MainText1>
            </Col>
            <Col>
                <MainText1 class ="extra">
                    <span>
                        <p class ="subtitle">Back-End Tools:</p> 
                            <p>MongoDB</p>
                            <p>MySQL</p>
                            <p>PHP</p>
                            <p>API Utilization and Development</p>
                            <p>Deployment and Hosting</p>
                    </span>
                </MainText1>
            </Col>
            <Col>
                <MainText1 class ="extra">
                    <span>
                        <p class ="subtitle">Related Skills:</p> 
                        <p>Bilingual</p>
                        <p>PHP</p>
                        <p>API Utilization and Development</p>
                        <p>CPR certified</p>
                    </span>
                </MainText1>
            </Col>
            </Row>
            </Table>
        </TableContainer>
    )
}
export const TableContainer = styled.div`
    min-height: 100vh;
    display: flex;
    padding: 0rem 10rem;
    justify-content:center;
    @media only screen and (max-width: 650px) {
            padding: 0rem 6rem;
        }
`;

export const Table = styled.div`
    min-height: 80vh;
    background-color: white;
    color: black;
    justify-content:center;
    width: 70rem;
    bottom: 10rem;
    position: relative;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const MainText2 = styled.div`
    justify-content: center;
    display: flex;
    text-align: center;
    padding-top:1rem;
    
    img{
        padding-top: 2rem;
    }
    h1{
        font-size:1.5rem;
        padding-top: 2rem;
        color: black;
        justify-content: center;
    }
    .subtitle{
        color:#7510F7;
        padding-top:2rem;
    }
`;

const MainText = styled.div`
    justify-content: center;
    display: flex;
    text-align: center;
    padding-top:1rem;
    border-left: 1px solid #E6ECF8;
    img{
        padding-top: 2rem;
    }
    h1{
        font-size:1.5rem;
        padding-top: 2rem;
        color: black;
        justify-content: center;
    }
    .subtitle{
        color:#7510F7;
        padding-top:2rem;
    }
`;
const MainText1 = styled(MainText)`height: 60vh;`

export default TableSection;