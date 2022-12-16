import React, { useState } from 'react'
import styled from 'styled-components'
import Header_logo from '../../assets/Header_logo.svg'
import Mh from '../../assets/Mh.svg'
import Mh_close from '../../assets/Mh_close.svg'
import {device} from '../../styles/BreakPoints'

const Header = () => {
  const [menu, setMenu] = React.useState(false)

  return (
    <HeaderStyles>
      <div>
        <a href="/">
        <img src={Header_logo} alt="Header icon logo" />
        </a>
      </div>
      <nav>
        <button onClick={() => setMenu(!menu)}>
          {menu ? (
            <img src={Mh_close} />
          ) : (<img src={Mh} />) }
        </button>
        <ul className={`b-1 ${menu ? 'menuActive' : ''}`}>
          <li><a href="/">Início</a></li>
          <li><a href="/">Clientes</a></li>
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Contate-nos</a></li>
        </ul>
      </nav>
    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
  padding-top:10px;

  display:flex;
  justify-content:space-between;
  align-items:center;

  color: ${({ theme }) => theme.colors.White};

  button {
    background: none;
    border: none;
    cursor: pointer;
    display: none;
    padding: 10px 10px 10px 10px;
    z-index: 999;
    position: relative;
  }
  ul {
    display:flex;
    align-items:center;
    gap:25px;

    li:hover {
      color:${({theme}) => theme.colors.Grey};
    }
  }

  ul li:last-child {
    padding: 10px 21px;
    border: 1px solid ${({theme}) => theme.colors.Primary};
    border-radius: 5px;

    &:hover {
      background-color:${({theme}) => theme.colors.Primary};
      transition:.4s;
      color: ${({theme}) => theme.colors.White};
    }
  }

  @media ${device.sm} {
    button {
      display:block;
    }
    ul {
      display:none;
    }
    ul {
      margin-top: 0px;
      position: absolute;
      width: 100%;
      top: 0px;
      right: 0px;
      flex-direction: column;
      padding-top: 90px;
      display: none;
      z-index: 800;
      gap: 30px;
      > li {
        width: 100%;
        text-align: center;
        border-bottom:1px solid ${({ theme }) => theme.colors.Primary};
        padding:0 0 8px 0;
        > a {
          font-size: 24px;
          color: ${({ theme }) => theme.colors.Primary};
        }
        &:last-child {
          border:none;
          padding:0 0 8px 0;

          &:hover {
            background-color: transparent;
          }
        }
      }
    }
    .menuActive {
      background: rgba( 23, 23, 23, 0.9 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 1px );
      -webkit-backdrop-filter: blur( 1px );
      border-left:1px solid ${({ theme }) => theme.colors.Primary};
      border-bottom:1px solid ${({ theme }) => theme.colors.Primary};
      border-radius: 10px;


      display: flex;
      border-radius: 0 0 0 6px;
      width: 50%;
      height: max-content;
    }
  }
`

export default Header