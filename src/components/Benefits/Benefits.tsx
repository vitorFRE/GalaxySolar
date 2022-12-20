import React from 'react';
import styled from 'styled-components';
import BenefitsCard from '../Utils/SimpleCard';
import folha from '../../assets/folha.svg';
import hourglass from '../../assets/hourglass.svg';
import chart_line from '../../assets/chart_line.svg';
import real from '../../assets/real.svg';
import { device } from '../../styles/BreakPoints';
import { motion } from 'framer-motion';

const Benefits = () => {
  return (
    <Container_bg>
      <Container id="sobre">
        <TitleContainer
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ ease: 'linear', duration: 1.5 }}
        >
          <h1 className="hl-1">
            Sobre Nós
            <br /> e Benefícios.
          </h1>

          <p className="b">
            Nossa empresa especializada em soluções de energia solar para
            propriedades residenciais, comerciais e rurais. Oferecemos uma gama
            de serviços, incluindo projeto e instalação de sistemas de painéis
            solares, bem como manutenção e suporte continuados.
          </p>

          <p className="b">
            Nossa equipe de profissionais experientes tem um profundo
            conhecimento de tecnologia solar e está comprometida em oferecer aos
            nossos clientes o mais alto nível de serviço.
          </p>

          <p className="b">
            Acreditamos que a energia solar é o futuro da energia e estamos
            dedicados a ajudar nossos clientes a fazer a transição para uma
            fonte de energia mais sustentável e eficiente em termos de custos.
          </p>

          <p className="b">
            Se você é um proprietário de residência, empresário ou agricultor,
            temos a expertise e os recursos para ajudá-lo a aproveitar o poder
            do sol e reduzir seus custos com energia.
          </p>
        </TitleContainer>

        <BenefitsContainer
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ ease: 'linear', duration: 1.2 }}
        >
          <BenefitsCard
            img={folha}
            title="Energia limpa"
            desc="Energia limpa é uma fonte de energia renovável que não causa poluição, O Brasil ocupa atualmente a 16ª posição no ranking mundial de energia solar."
          />
          <BenefitsCard
            img={hourglass}
            title="Alta Durabilidade"
            desc="Painéis solares têm alta durabilidade, com vida útil garantida de pelo menos 25 anos, podendo passar dos 30 anos com manutenções periódicas."
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
  padding-bottom: 80px;

  color: ${({ theme }) => theme.colors.Black};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media ${device.md} {
    grid-template-columns: 1fr;
  }
`;

const TitleContainer = styled(motion.div)`
  p {
    margin-bottom: 15px;
  }
  h1 {
    margin-bottom: 20px;
  }
  @media ${device.md} {
    h1 {
      margin-bottom: 50px;
    }
    p:last-child {
      margin-bottom: 50px;
    }
  }
`;

const BenefitsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px 60px;

  @media ${device.xs} {
    grid-template-columns: 1fr;
  }
`;

export default Benefits;
