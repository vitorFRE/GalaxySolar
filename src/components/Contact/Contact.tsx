import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/BreakPoints';

export const Contact = () => {
  return (
    <Container id="contato">
      <h2 className="hl-2">Contato</h2>
      <p>
        Entre em contato conosco para mais informações sobre nossos serviços de
        energia solar ou para agendar uma consulta. Estamos ansiosos para
        ajudá-lo a explorar as opções de energia solar e encontrar a solução
        perfeita para suas necessidades. Não hesite em nos enviar uma mensagem
        ou ligar para nós para marcar uma consulta. Estamos sempre dispostos a
        responder a perguntas e ajudar de qualquer maneira que pudermos.
      </p>

      <Form>
        <div>
          <label className="hl-5" htmlFor="nome">
            Nome
          </label>
          <input className="b" type="text" name="nome" placeholder="Seu nome" />
        </div>
        <div>
          <label className="hl-5" htmlFor="telefone">
            Telefone
          </label>
          <input
            className="b"
            type="text"
            name="telefone"
            placeholder="(00) 99999-9999"
          />
        </div>
        <div>
          <label className="hl-5" htmlFor="email">
            E-mail
          </label>
          <input
            className="b"
            type="email"
            name="email"
            placeholder="email@email.com"
          />
        </div>
        <div>
          <label className="hl-5" htmlFor="assunto">
            Assunto
          </label>
          <input
            className="b"
            type="text"
            name="assunto"
            placeholder="Duvida"
          />
        </div>
        <div id="textarea">
          <label className="hl-5" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            className="b"
            name="mensagem"
            rows={5}
            placeholder="O que você precisa?"
          ></textarea>
        </div>
        <button className="b">Enviar</button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.White};

  > h2 {
    padding: 95px 0 10px 0;
  }

  > p {
    margin-bottom: 80px;
    max-width: 80ch;
    color: ${({ theme }) => theme.colors.Grey};
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 80px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  #email,
  #textarea {
    grid-column: span 2;
  }

  input[type='text'],
  input[type='email'],
  textarea {
    border: 2px solid rgba(233, 233, 233, 0.25);
    border-radius: 5px;
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
    color: black;

    background: #f7f7f7;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.Primary};
      caret-color: ${({ theme }) => theme.colors.Primary};
      box-shadow: 0 0 0 2px #0e6baf;
    }
  }

  @media ${device.sm} {
    grid-template-columns: 1fr;

    #email,
    #textarea {
      grid-column: 1;
    }
  }

  button {
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.Primary};
    color: white;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: #0e6baf;
      transition: 0.2s;
    }
  }
`;
