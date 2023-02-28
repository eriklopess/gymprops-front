/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import LOGO_IMG from '../../assets/Logo.svg';
import { Container, Logo } from '../../global';
import { HomeImageBox, HomeTextBox } from './styles';

export default function Home() {
  console.log(`%cFeito por: 
  Erik Lopes`, 'font-weight: bold; font-size: 20px; color: #ff0000;');
  return (
    <Container>
      <Logo src={LOGO_IMG} alt="logo" />
      <HomeTextBox>
        <h2>Bem-vindos à</h2>
        <h1>
          <strong>Academia X</strong>
        </h1>
        <Link to="/login">Entrar</Link>
      </HomeTextBox>
      <HomeImageBox>
        <img
          src={require('../../assets/mulher-correndo-azul.png')}
          alt="plano de fundo"
        />
      </HomeImageBox>
    </Container>
  );
}
