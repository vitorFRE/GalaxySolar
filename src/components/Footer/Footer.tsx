import React from 'react';
import styled from 'styled-components';
import Header_logo from '../../assets/Header_logo.svg';
import { device } from '../../styles/BreakPoints';

export const Footer = () => {
  return (
    <Container>
      <div>
        <a href="/">
          <img src={Header_logo} alt="Header icon logo" />
        </a>
      </div>

      <ul className="b">
        <li>Links Úteis</li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#clientes">Clientes</a>
        </li>
      </ul>
      <ul className="b">
        <li>Contatos</li>
        <li>+55 99 9999-9999</li>
        <li>GalaxySolar@Galaxy.com</li>
        <li>Rua orbita do Sol, 03</li>
        <li>Via Láctea, Terra</li>
      </ul>
    </Container>
  );
};

const Container = styled.footer`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  padding-top: 55px;
  border-top: 2px solid ${({ theme }) => theme.colors.Primary};

  display: flex;
  justify-content: center;
  gap: 120px;

  ul {
    > li:first-child {
      color: white;
      font-size: 1.75rem;
      line-height: 2.2rem;
      letter-spacing: -0.05rem;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
    }
    li {
      margin-bottom: 15px;
      color: #b2b2b2;

      &:hover {
        color: white;
      }
    }
  }

  @media ${device.sm} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
  }
`;
