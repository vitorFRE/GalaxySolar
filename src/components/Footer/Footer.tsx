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
      <ul>
        <li>Empresa</li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#clientes">Clientes</a>
        </li>
      </ul>
      <ul>
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

  padding-top: 95px;
  padding-bottom: 80px;
  border-top: 2px solid ${({ theme }) => theme.colors.Primary};

  display: flex;
  justify-content: space-between;

  ul {
    > li:first-child {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 600;
      font-size: 31px;
      line-height: 36px;
      color: white;
    }
    li {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
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
