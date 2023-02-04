import React, {useState} from 'react'
import styled from 'styled-components';
import ContactForm from './ContactForm';

const Footer = () => {
    
    return (
        <FooterContainer className="footer">
            <ContactContainer>
                <ContactTitle>
                    Contact
                </ContactTitle>
                <ContactDescription> 
                    Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
                </ContactDescription>
                <ContactForm/>
            </ContactContainer>
            <FooterItems>
            <div className="footer__item">
                &copy; 2023 Navpreet Kanda. All Rights Reserved.
            </div>
            <div className="footer__item">
                <div className="footer__contact">Email: <a href="mailto:navpreetkanda1@hotmail.ca" className="footer__link">navpreetkanda1@hotmail.ca</a></div>
                <div className="footer__contact">Tel: <a href="tel: +6479092094" className="footer__link">+6479092094</a></div>
            </div>
            </FooterItems>
        </FooterContainer>
    )
}

export const FooterContainer = styled.footer`
    min-height: 25rem;
    background-color: #2b2b2b;
    display: flex;
    justify-content: center;
    color: white;
    
`;

export const ContactTitle = styled.div`
    font-weight: 700;
    font-size: 27px;
`

export const ContactContainer = styled.footer`
    position: absolute;
    display:flex;
    @media(max-width: 800px){
        flex-direction: column;
        padding: 10px;
        height: 330px;
        margin-top: -25px;
    }
    margin-top: -85px;
    min-height: 175px;
    width: 80%;
    background-color: #141C3A;
    padding: 0rem 2rem;
    color: white;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    border-radius: 19px;
    button{
        color: #ffffff;
        border-radius: 40px;
        width: 165px;
        font-weight: 400;
        background-color: transparent;
        border: 2px solid #5BE9B9;
        padding: 12px 0;

    }
`;
export const ContactDescription = styled.div`
    font-weight: 600;
    text-align: center;
    padding: 0 2rem;
`
export const FooterItems = styled.div`
    position: relative;
    margin-top: 100px;
    font-weight: 700;
    font-size: 21px;
    text-align: center;
    text-decoration: unset;
    a{
    color: #36D8C5;
    }
    @media(max-width: 800px) {
        margin-top: 310px;
    }
    @media(max-width: 600px) {
        margin-top: 312px;
        font-size: 16px;
    }
    a:hover{
        color:white; 
    }
`
export default Footer
