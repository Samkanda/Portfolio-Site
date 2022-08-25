import React from 'react';
import styled from 'styled-components';
import project_1 from "../img/project_11.png";
import project_2 from "../img/project_2.PNG";
import project_3 from "../img/project_3.PNG";
import project_4 from "../img/project_4.PNG";
import project_5 from "../img/playline.png";
import IGN from "../img/IGN.PNG";


import {Row, Col, Container} from 'react-bootstrap';

const ProjectSection = () => {
    return(
        <Project id="projects">
            <Container fluid="xxl">
            <Row className='titleRow'>
                <Col className='titleCo'>
                <span className='project-title-container'>
                <h1>My Recent Work</h1>
                <div>Here are a few design projects I've worked on recently. Want to see more? Email me.</div>
                </span>
                </Col>
            </Row>
            <div className='project-body'>
            <Row >
            <Col>
                <div class ="aa">
                    <a href= "https://app.playline.xyz/"><img src={project_5} alt="dd" /></a>
                </div>
                <div className='description'>
                <h3 class="project-card__title">Playline Fantasy League Betting </h3>
                <p class="project-card__description">
                    Playline: A betting site developed by myself and a backend specialist. 
                </p>
                <p class="project-card__stack">Used stack:</p>
                <ul class="tags">
                    <li>React</li>
                    <li>SASS</li>
                    <li>Bootstrap</li>
                    <li>Redux</li>
                </ul>
                <a href="https://app.playline.xyz/lobby" class="project-card__link">playline.xyz</a>
                <p style={{marginTop: "10px", color: "red", marginBottom: "0"}}class="project-card__link">Private Company Infomrmation</p>
                </div>
            </Col>
            </Row>
            <Row >
            <Col>
                <div class ="aa">
                    <a href= "https://samkanda.github.io/Mini-IGN-Clone/"><img src={IGN} alt="dd" /></a>
                </div>
                <div className='description'>
                <h3 class="project-card__title">Mini IGN Clone </h3>
                <p class="project-card__description">
                    IGN Clone: Using a game API to retrieve upcoming game information 
                </p>
                <p class="project-card__stack">Used stack:</p>
                <ul class="tags">
                    <li>React</li>
                    <li>SASS</li>
                    <li>Material ui</li>
                    <li>Redux</li>
                </ul>
                <a href="https://samkanda.github.io/Mini-IGN-Clone/" class="project-card__link">www.IGN-Clone.com</a>
                <a style={{marginTop: "10px"}}href="https://github.com/Samkanda/Mini-IGN-Clone" class="project-card__link">www.Github.com</a>

                </div>
            </Col>
            
            </Row>
            <Row >
                <Col>
                <div class ="aa">
                    <a href= "https://stoic-hamilton-6f1381.netlify.app/"><img src={project_1} alt="dd" /></a>
                </div>
                <div className='description'>
                <h3 class="project-card__title">Music Player </h3>
                <p class="project-card__description">
                    A custom music player that plays a small variety of songs. 
                </p>
                <p class="project-card__stack">Used stack:</p>
                <ul class="tags">
                    <li>Html5</li>
                    <li>Sass</li>
                    <li>React</li>
                    <li>UseHooks</li>
                </ul>
                <div className='link-container'>
                <a href="https://stoic-hamilton-6f1381.netlify.app/" class="project-card__link">www.MusicPlayer.com</a>
                <a style={{marginTop: "10px"}}href="https://github.com/Samkanda/react-music-app" class="project-card__link">www.Github.com</a>
                </div>
                </div>
                </Col>
                
            </Row>
            <Row>
            <Col>
                <div class ="aa">
                    <a href= "https://samkanda.github.io/pink-picture/"><img src={project_2} alt="dd" /></a>
                </div>
                <div className='description'>
                <h3 class="project-card__title">Photographer Site</h3>
                <p class="project-card__description">
                    Pink Picture, a mock photography site made using modern coding practices. 
                </p>
                <p class="project-card__stack">Used stack:</p>
                <ul class="tags">
                    <li>React</li>
                    <li>Material UI</li>
                    <li>JavaScript</li>
                    <li>Styled Components</li>
                </ul>
                <div className='link-container'>
                <a href="https://samkanda.github.io/pink-picture/" class="project-card__link">www.PinkPicture.com</a>
                <a style={{marginTop: "10px"}}href="https://github.com/Samkanda/pink-picture" class="project-card__link">www.Github.com</a>
                </div>
                </div>
                
                </Col>
                </Row>
            <Row >
                <Col>
                
                <div class ="aa">
                    <a href= "https://samkanda.github.io/Portfolio-Site/"><img src={project_3} alt="dd" /></a>
                </div>
                <div className='description'>
                <h3 class="project-card__title">Portfolio </h3>
                <p class="project-card__description">
                    The Portfolio code that is being used to create this site. 
                </p>
                <p class="project-card__stack">Used stack:</p>
                <ul class="tags">
                    <li>React-Spring</li>
                    <li>Bootstrap</li>
                    <li>Styled Components</li>
                </ul>
                <div className='link-container'>
                <a href="https://samkanda.github.io/Portfolio-Site/" class="project-card__link">www.Portfolio.com</a>
                <a style={{marginTop: "10px"}}href="https://github.com/Samkanda/Portfolio-Site" class="project-card__link">www.Github.com</a>
                </div>
                </div>
                </Col>
               
            </Row>
            </div>
        </Container>
        </Project>
        
    )
}


export const Games = styled.div`
    min-height: 50vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    justify-self: center;
    justify-items: center;
    justify-content: center;
`;

const StyledGame = styled.div`
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    border-radius: 1rem;
    cursor: pointer;
    max-width: 25rem;
    object-fit: cover;
    .github-icon{
            padding-top: 1rem;
            width: 3rem;
            color: blue;
        }
    h2{
        font-size: 1rem;
        background-color: grey;
        margin-right: .7rem;
        color: whitesmoke;
        padding: .4rem;
        border-radius: .5rem;
        display: inline-block;
    }
    img{
        width: 100%;
        height: 15rem;
        object-fit: cover;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
`;
export const Project = styled.div`
    @media(max-width: 900px){min-height: 90vw; }
    @media(max-width: 1200px){padding: 2rem 3rem 5rem 3rem}
    @media(max-width: 500px){padding: 2rem 0rem; }
    min-height: 48rem;
    display: flex;
    padding: 2rem 4rem;
    padding-bottom: 6rem;
    color: black;
    background-color: #F3F3F3;
    text-align: center;
    line-height: 1.5;
    .container-xxl{
        display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 97%;
    @media(max-width: 950px){width: 100%;}
    }
    .titleRow{
        border: none;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
        max-width: 59rem;
    }
    .project-body{
        padding: 0 3rem;
        @media(max-width: 500px){padding:  0;}
    .row{
        width: 100%;
        border: 1px solid #9299b33d;
        margin-bottom: 30px;
        &:hover{
            box-shadow: 0 1px 31px rgb(0 0 0 / 0.09);
            transition: 400ms;
            }
    }
}
    .project-card__title{
        display: flex; 
        font-family: 'Roboto Mono', monospace;
        font-size: 18px;
        line-height: 30px;
        text-transform: uppercase;
        margin-bottom: 0px;
        font-weight: 700;
        color: #555;
        text-align: left;
    }
    .titleCo{
        display: flex;
        justify-content: start;
        margin-bottom: 20px;
        div , h1{
            justify-content: center;
            justify-content: flex-start;
        }
    }
    .project-card__stack{
        display: flex; 
        font-family: 'Roboto Mono', monospace;
        font-size: 12px;
        line-height: 30px;
        text-transform: uppercase;
        margin-bottom: 12px;
        font-weight: 700;
        color: #555;
    }
    .project-card__description{
        padding-bottom: 1rem;
        font-family: 'Roboto',sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: #555;
        text-align: initial;
       
    }
    .project-card__link{
        font-family: 'Roboto Mono',monospace;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        justify-content: flex-end;
    }
        a {
            color: #6d56c1;
            transition: all .3s;
            position: relative;
            text-decoration: none;
            cursor: pointer;
        }
    .link-container{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    
    .project-body{
        .col{display: flex} 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        width: 94vw;
        max-width: 65rem;
        .row{
            height: 21rem;
            @media(max-width: 950px){
            height: auto;
        }
        }
        
    }
    .project-title-container{
        h1{font-size: 2rem; display: flex} 
        div{display: flex}
        text-align: left;
    }
    .description{
        padding: 3rem 3rem 1rem 2rem; 
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        @media(max-width: 600px){padding: 3rem 1rem 1rem 2rem;     width: unset;}
    }
    .col{
        padding: 0;
        @media(max-width: 950px){
        flex-direction: column;
    }
    }
    .tags{list-style: none; display: flex; padding: 0; flex-wrap: wrap;}

    .tags li {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgb(0 0 0 / 14%);
    padding: 5px 10px;
    margin: 0px;
    margin-right: 5px;
    border-radius: 3px;
    margin-bottom: 3px;
}
    .aa{
    width: 25rem;
    padding: 0 3rem;
    border: 1px solid lightgray;
    background: lightgray;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 21rem;
        @media(max-width: 950px){    
            width: 100%;
        }
        @media(max-width: 600px){    
            padding: 0;
        }
    }
    img{
        width: 22rem;
        min-height: 16rem;
        @media(max-width: 430px){width: 20rem;
        min-height: 16rem;}
    }
`;
export default ProjectSection;