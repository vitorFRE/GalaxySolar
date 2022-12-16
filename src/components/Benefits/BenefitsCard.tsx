import React from 'react';
import styled from 'styled-components';

type Args = {
  img: string;
  title: string;
  desc: string;
};

const BenefitsCard = (dados: Args) => {
  return (
    <CardUl>
      <li>
        <img src={dados.img} alt="Card logo" />
      </li>
      <li className="hl-5">{dados.title}</li>
      <li className="b-1">{dados.desc}</li>
    </CardUl>
  );
};

const CardUl = styled.ul`
  width: 100%;
  max-width: 250px;
  > li:nth-child(2) {
    margin: 15px 0;
  }
`;

export default BenefitsCard;
