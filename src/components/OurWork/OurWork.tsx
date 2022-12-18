import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import rural from '../../assets/rural.png';
import residencial from '../../assets/residencial.png';
import comercial from '../../assets/comercial.png';

const OurWork = () => {
  return (
    <Container>
      <Content>
        <h2 className="hl-2">Sobre nosso trabalho</h2>

        <Works>
          <ul>
            <li className="hl-3">Residencial</li>
            <li>
              A energia solar pode proporcionar uma economia de até 80% na conta
              de luz mensal, com o retorno do investimento feito em
              aproximadamente três anos.
            </li>
          </ul>
          <ul>
            <li className="hl-3">Comercial</li>
            <li>
              A energia solar pode proporcionar uma economia de até 80% na conta
              de luz mensal, com o retorno do investimento feito em
              aproximadamente três anos.
            </li>
          </ul>
          <ul>
            <li className="hl-3">Rural</li>
            <li>
              A energia solar pode proporcionar uma economia de até 80% na conta
              de luz mensal, com o retorno do investimento feito em
              aproximadamente três anos.
            </li>
          </ul>
        </Works>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.BgWhite};
  color: ${({ theme }) => theme.colors.Black};
`;

const Content = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  > h2 {
    padding: 95px 0 80px 0;
  }
`;

const Works = styled.div`
  justify-content: space-between;
  gap: 20px;
  display: flex;

  padding-bottom: 80px;
  ul {
    color: white;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    width: 383px;
    height: 483px;

    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;

    li {
      padding: 0 10px 0 10px;
      text-align: center;
    }

    &:nth-child(1) {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.64),
          rgba(0, 0, 0, 0.54)
        ),
        url(${residencial});
    }
    &:nth-child(2) {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.64),
          rgba(0, 0, 0, 0.54)
        ),
        url(${comercial});
    }
    &:nth-child(3) {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.64),
          rgba(0, 0, 0, 0.54)
        ),
        url(${rural});
    }
  }
`;

export default OurWork;
