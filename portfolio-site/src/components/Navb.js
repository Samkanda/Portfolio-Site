import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../img/logo.svg';

const Navb = () => {
  
  const [showLinks, setShowLinks] = useState(false);
  return(
      <Navbar bg="light" variant="light">
        <LeftSide>
        <h1>NK</h1>
        </LeftSide>
        <RightSide>
        <BurgerButton onClick={() => setShowLinks(!showLinks)}><MenuIcon className="bb"/></BurgerButton>
          <Links id={showLinks ? "hidden" : ""}>
            <a>Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            {/* <a>Contact</a> */}
          </Links>
        </RightSide>
      </Navbar>
    )
};

export const Navbar = styled.div`
    display: flex;
    padding-top:1rem;
    width: 100%;
    height: 80px;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    justify-content: space-between;
    padding: 1.5rem 5rem;
    @media(max-width: 600px){ padding: 1.5rem 1rem;}
    h1{
      font-family: 'Rubik Wet Paint', cursive;
      color:#7510F7;
      padding-left: 20px;
      font-size: 3.2rem;
      margin: 0;
    }
`;

export const BurgerButton = styled.button`
  border: none;
  background-color: Transparent;
  .bb{
    width: 90px;
    height: 40px;
  }
`;
export const LeftSide = styled.div`
      @media only screen and (max-width: 650px) {
        h1 {font-size: 2rem;} 
      }
`;
export const RightSide = styled.div`
    display: flex;
    button{
      display: none;
    }
    @media only screen and (max-width: 650px) {
      justify-content: flex-end;
      padding-left: 1rem;
      button{
        display:flex;
      }
      a{
        display: none;
      }
      #hidden{
        position: absolute;
        left: 0px;
        top: 90px;
        height: 125px;
        width: 100%;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 200px;
      }
    }
    #hidden{
      display: flex;
    }
    #hidden a{
      display: flex;
      margin: 1px;
    }
`;
export const Links = styled.div`
    max-height: 80px;
    color: #7510F7;
    font-size: 25px;
    a{
      margin-left: 15px;
      cursor: pointer;
      text-decoration: none;
    }
    @media only screen and (max-width: 750px) {
      a{
        font-size: 20px;
      }
    }
`;

export default Navb;