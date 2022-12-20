import React from 'react';
import styled from 'styled-components';
import pLogo from '../../assets/pLogo.svg';
import Git from '../../assets/GitHub-logo.svg';
import Lin from '../../assets/Linkedin-logo.svg';

const SubFooter = () => {
  return (
    <SFooter>
      <div className={'footer' + ' container hl-4'}>
        <a href="/">
          <img src={pLogo} alt="Header Logo" />
        </a>
        <p>
          Feito com 💜 by <a href="https://github.com/vitorFRE">Vitor</a> © 2022
        </p>

        <div className={'footer_icons'}>
          <a href="https://github.com/vitorFRE">
            <img src={Git} alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/vitor-santos-5744861b2/">
            <img src={Lin} alt="Linkedin Logo" />
          </a>
        </div>
      </div>
    </SFooter>
  );
};

const SFooter = styled.div`
  margin-top: 20px;
  background-color: white;

  .footer {
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 20px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
  }

  .footer_icons {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .footer p a {
    color: ${({ theme }) => theme.colors.Primary};
  }

  @media (max-width: 600px) {
    .footer p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export default SubFooter;
