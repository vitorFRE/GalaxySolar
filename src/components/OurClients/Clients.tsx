import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SimpleCard from '../Utils/SimpleCard';
import { motion } from 'framer-motion';
import Data from '../Helper/Data.json';

const Clients = () => {
  const carousel = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <Container id="clientes">
      <Title>
        <h2 className="hl-2">Avaliações de Nossos Clientes</h2>
      </Title>

      <Client ref={carousel} whileTap={{ cursor: 'grabbing' }}>
        <ClientList
          drag="x"
          dragConstraints={{ right: 0, left: -width! }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          {Data
            ? Data.Clientes.map((info) => (
                <SimpleCard
                  key={info.Client_name}
                  img={info.img_url}
                  title={info.Client_name}
                  desc={info.descricao}
                />
              ))
            : null}
        </ClientList>
      </Client>

      <h3 className="drag hl-6">ARRASTE</h3>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  .drag {
    color: ${({ theme }) => theme.colors.Primary};
    text-align: center;
    font-weight: 600;

    margin-bottom: 40px;

    &::after {
      content: '>';
      margin-left: 10px;
    }

    &::before {
      content: '<';
      margin-right: 10px;
    }
  }
`;

const Title = styled.div`
  padding-top: 95px;
  padding-bottom: 80px;
`;

const Client = styled(motion.div)`
  overflow: hidden;
  cursor: grab;
  padding-bottom: 40px;
`;

const ClientList = styled(motion.div)`
  display: flex;
  gap: 60px;
  > ul {
    max-width: 320px;
    > li {
      width: 320px;

      &:last-child {
        color: ${({ theme }) => theme.colors.Grey};
      }
      > img {
        width: 320px;
        -webkit-user-drag: none;
        height: 220px;
      }
    }
  }
`;

export default Clients;
