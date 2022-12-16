import React from 'react';
import styled from 'styled-components';
import BenefitsCard from './BenefitsCard';
import folha from '../../assets/folha.svg';
import hourglass from '../../assets/hourglass.svg';
import chart_line from '../../assets/chart_line.svg';
import real from '../../assets/real.svg';
import { device } from '../../styles/BreakPoints';

const Benefits = () => {
  return (
    <Container_bg>
      <Container>
        <TitleContainer>
          <h1 className="hl-2">
            Benefícios
            <br /> da Energia Solar.
          </h1>
        </TitleContainer>

        <BenefitsContainer>
          <BenefitsCard
            img={folha}
            title="Energia limpa"
            desc="Energia limpa é uma fonte de energia renovável que não causa poluição, O Brasil ocupa atualmente a 16ª posição no ranking mundial de energia solar."
          />
          <BenefitsCard
            img={hourglass}
            title="Alta Durabilidade"
            desc="Painéis solares têm alta durabilidade, com vida útil garantida de pelo menos 25 anos, podendo passar dos 30 anos com manutenções periódicas. Além disso, o Brasil tem alta incidência solar e boa performance da tecnologia mesmo em regiões mais chuvosas."
          />
          <BenefitsCard
            img={real}
            title="Economia"
            desc="A energia solar pode proporcionar uma economia de até 80% na conta de luz mensal, com o retorno do investimento feito em aproximadamente três anos."
          />
          <BenefitsCard
            img={chart_line}
            title="Valoriza o imóvel"
            desc="Estudos mostram que um sistema fotovoltaico pode valorizar um imóvel em até 10% , e o Green Build Council Brasil estima que propriedades sustentáveis podem ser valorizadas em até 30% mais alto."
          />
        </BenefitsContainer>
      </Container>
    </Container_bg>
  );
};

const Container_bg = styled.section`
  background-color: ${({ theme }) => theme.colors.BgWhite};
`;

const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
  padding-top: 124px;

  color: ${({ theme }) => theme.colors.Black};

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${device.md} {
    grid-template-columns: 1fr;
    padding-top: 62px;
  }
`;

const TitleContainer = styled.div`
  @media ${device.md} {
    h1 {
      margin-bottom: 50px;
    }
  }
`;

const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px 60px;

  @media ${device.xs} {
    grid-template-columns: 1fr;
  }
`;

export default Benefits;
