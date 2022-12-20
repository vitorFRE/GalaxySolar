import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/BreakPoints';

const Banner = () => {
  return (
    <BannerContent id="banner">
      <TextContainer>
        <h2 className="hl-2">
          Energia limpa e renovavel
          <br />
          Para um mundo melhor.
        </h2>

        <p className="b-1">
          A energia solar fotovoltaica é uma fonte de energia renovável e limpa
          que utiliza a radiação solar para gerar eletricidade.
        </p>

        <p className="b-1">
          Ela se baseia no efeito fotoelétrico, onde determinados materiais
          absorvem fótons e liberam elétrons, gerando corrente elétrica.
        </p>
      </TextContainer>

      <ImgContainer>
        <img src="https://images.unsplash.com/photo-1589275776107-e193042128bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      </ImgContainer>
    </BannerContent>
  );
};

const BannerContent = styled.main`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  margin-top: 50px;
  margin-bottom: 77px;

  display: grid;
  grid-template-columns: 55% auto;

  @media ${device.sm} {
    grid-template-columns: 1fr;
  }
`;
const TextContainer = styled.div`
  h2 {
    margin-bottom: 25px;
  }
  p {
    margin-bottom: 15px;
  }
`;

const ImgContainer = styled.div`
  img {
    border-radius: 5px;
  }
`;

export default Banner;
