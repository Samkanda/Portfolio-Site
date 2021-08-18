import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {faPortrait } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactContainer>
        <Content className="contact__list">
            <li className="contact__item">
                <Image href="https://www.linkedin.com/in/navpreet-kanda/" >
                    <Label className="contact__label">Linkedin</Label> <FontAwesomeIcon icon={faLinkedin} />
                </Image>
            </li>

            <li className="contact__item">
                <Image1 href="https://github.com/Samkanda"  >
                    <Label className="contact__label">Github</Label> <FontAwesomeIcon icon={faGithub} />
                </Image1>
            </li>

            <li className="contact__item">
                <Image2 href="mailto:navpreetkanda1@hotmail.ca"  >
                    <Label className="contact__label">Email</Label> <FontAwesomeIcon icon={faEnvelope} />
                </Image2>
            </li>

            <li className="contact__item">
                <Image3 href="https://drive.google.com/file/d/1TtKGIko1N8tcQqzIPt4Ju2XQAMTeFVa6/view?usp=sharing" >
                    <Label className="contact__label">Resume</Label> <FontAwesomeIcon icon={faPortrait} />
                </Image3>
            </li>
        </Content>
    </ContactContainer>
    )
}

const ContactContainer = styled.div`
    position: fixed;
    /* position: absolute; */
    top: 50%;
    left: -9rem;
    transform: translateY(-50%);
    z-index: 0;
    @media only screen and (min-width: 100em)
        {
            left: -14.5rem
        }
       
`

const Content = styled.ul`
    list-style: none;
`

const Image = styled.a`
    background-color: #0077b5;
    :visited, :link{
    display: block;
    color: #fff;
    font-size: 1.5rem;
    padding: 1.2rem;
    transition: all 450ms ;
    text-decoration: none;
    @media only screen and (max-width: 31.25em)
    {
        padding: 1rem;
    }
    @media only screen and (min-width: 100em)
    {
        padding: 1rem;
        font-size: 1.8rem;
    }
    }
    
    :hover, :active, :focus{
        transform: translateX(6.4rem)  
    }
    
    
`
const Image1 = styled(Image)`
    background-color: #333;
`
const Image2 = styled(Image)`
    background-color: #6fc2b0;
`
const Image3 = styled(Image)`
    background-color: #565f69;
`

const Label = styled.span`
    display: inline-block;
    vertical-align: middle;
    font-size: 1.2rem;
    margin-right: 1.25rem;
    width: 5.8rem;
    letter-spacing: 1px;
    text-align: right;
    @media only screen and (min-width: 100em)
        {
            width: 10.8rem;
        }
`


export default Contact
