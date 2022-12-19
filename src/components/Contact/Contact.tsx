import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/BreakPoints';

export const Contact = () => {
  return (
    <Container>
      <h2 className="hl-3">Contato</h2>

      <Form>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input type="text" name="telefone" placeholder="(00) 99999-9999" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" placeholder="email@email.com" />
        </div>
        <div>
          <label htmlFor="assunto">Assunto</label>
          <input type="text" name="assunto" placeholder="Duvida" />
        </div>
        <div id="textarea">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            name="mensagem"
            rows={5}
            placeholder="O que você precisa?"
          ></textarea>
        </div>
        <button>Enviar</button>
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
    padding: 95px 0 80px 0;
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
    color: white;

    background: rgba(32, 32, 32, 0.15);
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
