import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import rural from '../../assets/rural.png';
import residencial from '../../assets/residencial.png';
import comercial from '../../assets/comercial.png';
import { device } from '../../styles/BreakPoints';

const OurWork = () => {
  return (
    <Container>
      <Content>
        <h2 className="hl-2">Sobre nossos serviços</h2>
        <p className="b">
          Nosso objetivo é ajudar nossos clientes a fazer a transição para uma
          fonte de energia mais sustentável e eficiente em termos de custos."
        </p>

        <Works>
          <ul>
            <li className="hl-2">Residencial</li>
            <li className="b">
              Para as propriedades residenciais, oferecemos design e instalação
              de sistemas de painéis solares, bem como manutenção e suporte
              continuados.
            </li>
          </ul>
          <ul>
            <li className="hl-2">Comercial</li>
            <li className="b">
              Para as propriedades comerciais, temos a experiência e os recursos
              para ajudar a sua empresa a aproveitar o poder do sol e reduzir
              seus custos com energia.
            </li>
          </ul>
          <ul>
            <li className="hl-2">Rural</li>
            <li className="b">
              para as propriedades rurais, podemos fornecer soluções de energia
              solar personalizadas para atender às suas necessidades
              específicas.
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

  > p {
    margin-bottom: 60px;
    max-width: 80ch;
    @media ${device.sm} {
      margin-bottom: 40px;
    }
  }

  > h2 {
    padding: 95px 0 10px 0;

    @media ${device.sm} {
      padding: 50px 0 10px 0;
    }
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

  @media ${device.sm} {
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
  }
`;

export default OurWork;
