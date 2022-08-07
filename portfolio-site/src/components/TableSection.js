import React from 'react'
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import pencil from '../img/pencil.svg';
import book from '../img/book.svg';
import webpage from '../img/webpage.svg';
const TableSection = () => {
    return (
        <div>
            
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
            <Col style={{borderLeft: "1px solid #E6ECF8"}}>
                <MainText>
                    <span>
                    <img src={book} alt="dd"/>
                    <h1>Back-end Developer</h1><br/>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    </span>
                </MainText>
            </Col>
            <Col style={{borderLeft: "1px solid #E6ECF8"}}>
                <MainText>
                    <span>
                    <img src={webpage} alt="dd"/>
                    <h1>Design/Other Skills</h1><br/>
                    <p> I value a simple content structure, clean design patterns, and thoughtful interactions.</p>
                    </span>
                </MainText>
            </Col>
            </Row>
            <Row>
            <Col >
                <MainText>
                    <span>
                        <p className ="subtitle">Programming Languages I know:</p> 
                        <p className="subtitleContent">HTML, NodeJS,  React, JS, CSS, Sass, jQuery</p>
                    </span>
                </MainText>
            </Col>
            <Col style={{borderLeft: "1px solid #E6ECF8"}}>
                <MainText>
                    <span>
                        <p className ="subtitle">Programming Languages I know:</p> 
                        <p className="subtitleContent">HTML, React, JS, CSS, Sass, PHP</p>
                    </span>
                </MainText>
            </Col>
            <Col style={{borderLeft: "1px solid #E6ECF8"}}>
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
                <MainText1 className ="extra">
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
            <Col style={{borderLeft: "1px solid #E6ECF8"}}>
                <MainText1 class ="extra">
                    <span>
                        <p className ="subtitle">Back-End Tools:</p> 
                            <p>MongoDB</p>
                            <p>MySQL</p>
                            <p>PHP</p>
                            <p>API Utilization and Development</p>
                            <p>Deployment and Hosting</p>
                    </span>
                </MainText1>
            </Col>
            <Col style={{borderLeft: "1px solid #E6ECF8"}}>
                <MainText1 class ="extra">
                    <span>
                        <p className ="subtitle">Related Skills:</p> 
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
        <MobileTable>
        <Table>
            <Row>
                <MainText2>
                <span>
                <img src={pencil} alt="pencil"/>
                <h1>Front-end Developer</h1><br/>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p></span>
                </MainText2>
                <MainText>
                    <span>
                        <p className ="subtitle">Things I enjoy designing:</p> 
                        <p className="subtitleContent">UX, UI, Web, Mobile, Apps</p>
                    </span>
                </MainText>
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
                </Row>
                <Row>
                <MainText>
                    <span>
                    <img src={book} alt="dd"/>
                    <h1>Back-end Developer</h1><br/>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    </span>
                </MainText>
                <MainText>
                    <span>
                        <p className ="subtitle">Programming Languages I know:</p> 
                        <p className="subtitleContent">HTML, NodeJS,  React, JS, CSS, Sass, jQuery</p>
                    </span>
                </MainText>
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
                </Row>
                <Row>
                <MainText>
                    <span>
                    <img src={webpage} alt="dd"/>
                    <h1>Design/Other Skills</h1><br/>
                    <p> I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    </span>
                </MainText>
                <MainText1 class ="extra" style={{borderBottom: "none"}}>
                    <span>
                        <p class ="subtitle">Related Skills:</p> 
                        <p>Bilingual</p>
                        <p>PHP</p>
                        <p>API Utilization and Development</p>
                        <p>CPR certified</p>
                    </span>
                </MainText1>
                </Row>
            </Table>
        </MobileTable>
        </div>
    )
}
export const TableContainer = styled.div`
    min-height: 100vh;
    display: flex;
    padding: 0rem 10rem;
    justify-content:center;
    .row {padding: 0; margin: 0;}
    .col{padding: 0 7px; margin: 0;}
    @media(max-width: 1000px){    
        padding: 0rem 5rem;
}
@media(max-width: 750px){display: none}
`;

export const MobileTable = styled.div`
@media(min-width: 751px){display: none}
    min-height: 100vh;
    display: flex;
    padding: 0rem 3rem;
    justify-content:center;
    .row{
        display: flex;
        justify-content: center;
        margin: 0;
    }
    .extra{
        width: 100%;
        border-bottom: 2px solid black;
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
    box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
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
    /* border-left: 1px solid #E6ECF8; */
    @media(max-width: 750px) {
        border-left: none;
        padding: 0;
    }
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
const MainText1 = styled(MainText)`
    height: 60vh;
    @media (max-width: 750px) {
        height: auto;
        width: 100%;
        border-bottom: 1px solid #E6ECF8;
    }
    `

export default TableSection;