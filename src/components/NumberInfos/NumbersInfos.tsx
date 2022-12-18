import React, { useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../../styles/BreakPoints';
import AnimateNumbers from './AnimateNumbers';

const NumbersInfos = () => {
  useEffect(() => {
    const teste = document.querySelectorAll('.n');
    AnimateNumbers(teste);
  }, []);

  return (
    <Container_bg>
      <Container>
        <ul className="b-1">
          <li>
            <span>
              +<span className="n">543</span>
            </span>
            Clientes
          </li>
          <li>
            <span>
              +R$<span className="n">463331</span>
            </span>
            Dinheiro Economizado
          </li>
          <li>
            <span>
              +<span className="n">1200</span>
            </span>
            Painéis Instalados
          </li>
          <li>
            <span>
              +<span className="n">840</span>
            </span>
            Baterias Instalados
          </li>
        </ul>
      </Container>
    </Container_bg>
  );
};

const Container_bg = styled.div`
  background-color: white;
`;

const Container = styled.div`
  max-width: 900px;
  padding: 0 1rem;
  margin: 0 auto;

  position: relative;
  top: -46.14px;

  color: ${({ theme }) => theme.colors.Black};

  ul {
    background-color: ${({ theme }) => theme.colors.White};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 26px 0 26px 0;
    display: flex;
    justify-content: space-evenly;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        color: ${({ theme }) => theme.colors.Primary};
        font-weight: bold;
        font-size: 1.125rem;
        line-height: 23.4px;
      }
    }
  }

  @media ${device.sm} {
    ul li:nth-child(even) {
      display: none;
    }
  }
`;

export default NumbersInfos;
