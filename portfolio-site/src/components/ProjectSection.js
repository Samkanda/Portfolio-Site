import React from 'react';
import styled from 'styled-components';
import project_1 from "../img/project_11.png";
import project_2 from "../img/project_2.PNG";
import project_3 from "../img/project_33.png";
import project_4 from "../img/project_4.PNG";
import {Row, Col, Container, Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';

const ProjectSection = () => {
    return(
        <Project id="projects">
            <Container fluid="xxl">
            <Row>
                <Col class = "titleContent">
                <span>
                <h1>My Recent Work</h1><br/>
                <p>Here are a few design projects I've worked on recently. Want to see more? Email me.</p>
                </span>
                </Col>
            </Row>
           <Games>
                <StyledGame>
                    <div class ="image">
                        <a href= "https://stoic-hamilton-6f1381.netlify.app/"><img src={project_1} alt="dd" /></a>
                        <Card.Body>
                        <Card.Title>Music Player</Card.Title>
                        <Card.Text>
                        A fully functional music player that runs a selction of songs.
                        </Card.Text>
                        </Card.Body>
                        <div class = "overlay">
                        <ListGroup className="list-group-flush">
                        <ListGroupItem><h2>JS</h2><h2>SASS</h2><h2>UseHooks</h2><h2>HTML</h2></ListGroupItem>
                        </ListGroup>
                        </div>
                        <Card.Body>
                        <Card.Link href="https://stoic-hamilton-6f1381.netlify.app/"><Button variant="outline-primary">Website</Button></Card.Link>
                        <Card.Link href="https://github.com/Samkanda/react-music-app"><Button variant="outline-primary">Github</Button></Card.Link>
                    </Card.Body>
                    </div>
                </StyledGame>
                <StyledGame>
                    <div class ="image">
                        <a href= "https://suspicious-turing-e68bc4.netlify.app/"><img src={project_2} alt="dd" /></a>
                        <Card.Body>
                        <Card.Title>Photographer Site</Card.Title>
                        <Card.Text>
                        A photographer site project that uses motion, routes and styled components 
                        </Card.Text>
                        </Card.Body>
                        <div class = "overlay">
                        <ListGroup className="list-group-flush">
                        <ListGroupItem><h2>JS</h2><h2>SASS</h2><h2>Framer-motion</h2><h2>Bootstrap</h2></ListGroupItem>
                        </ListGroup>
                        </div>
                        <Card.Body>
                        <Card.Link href="https://suspicious-turing-e68bc4.netlify.app/"><Button variant="outline-primary">Website</Button></Card.Link>
                        <Card.Link href="https://github.com/Samkanda/client-site"><Button variant="outline-primary">Github</Button></Card.Link>
                    </Card.Body>
                    </div>
                </StyledGame>
                <StyledGame>
                    <div class ="image">
                        <a href= "https://samkanda.github.io/Portfolio-Site/"><img src={project_3} alt="dd" /></a>
                        <Card.Body>
                        <Card.Title>Portfolio Site</Card.Title>
                        <Card.Text>
                            Navpreet's portfolio site that displays my main projects and ability to develop designs. 
                        </Card.Text>
                        </Card.Body>
                        <div class = "overlay">
                        <ListGroup className="list-group-flush">
                        <ListGroupItem><h2>JS</h2><h2>Styled-components</h2><h2>UseHooks</h2><h2>Bootstrap</h2></ListGroupItem>
                        </ListGroup>
                        </div>
                        <Card.Body>
                        <Card.Link href="https://samkanda.github.io/Portfolio-Site/"><Button variant="outline-primary">Website</Button></Card.Link>
                        <Card.Link href="https://github.com/Samkanda/Portfolio-Site"><Button variant="outline-primary">Github</Button></Card.Link>
                    </Card.Body>
                    </div>
                </StyledGame>
                <StyledGame>
                    <div class ="image">
                        <a href= "https://laughing-mestorf-b0780d.netlify.app/"><img src={project_4} alt="dd" /></a>
                        <Card.Body>
                        <Card.Title>IGN Clone</Card.Title>
                        <Card.Text>
                        A parital clone of the IGN games website, using a api to provide the user with information on new, popular and featured games. 
                        </Card.Text>
                        </Card.Body>
                        <div class = "overlay">
                        <ListGroup className="list-group-flush">
                        <ListGroupItem><h2>JS</h2><h2>Redux</h2><h2>Bootstrap</h2><h2>Styled Components</h2></ListGroupItem>
                        </ListGroup>
                        </div>
                        <Card.Body>
                        <Card.Link href="https://laughing-mestorf-b0780d.netlify.app/"><Button variant="outline-primary">Website</Button></Card.Link>
                        <Card.Link href="https://github.com/Samkanda/Mini-IGN-Clone"><Button variant="outline-primary">Github</Button></Card.Link>
                    </Card.Body>
                    </div>
                </StyledGame>
           </Games>
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
    padding: 2rem 4rem;
    color: black;
    background-color: #F3F3F3;
    text-align: center;
    .titleContent{
        text-align: center;
    }
    button{
       border-color: #7510F7;
       color: #7510F7;
       :hover{
           background-color: #7510F7;
           border-color: #7510F7;
       }
    }
    line-height: 1.5;
`;
export default ProjectSection;