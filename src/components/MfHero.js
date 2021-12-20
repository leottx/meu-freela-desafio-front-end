import React from 'react';
import styled from 'styled-components';

// UTILIDADES
import { darken } from 'polished';

// COMPONENTES
import Wrapper from '@Components/Wrapper';
import Button from '@Components/Button';

const MfHeroStyled = styled.section`
  background: ${() => `url(${require('@Images/hero-bg.jpg').default})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 2;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${({ theme: { c } }) => c.black};
    opacity: 0.6;
    z-index: -1;
  }
  > div {
    display: flex;
    min-height: calc(100vh - 60px);
    align-items: center;
    > div {
      color: ${({ theme: { c } }) => c.white};
      padding: 4.8rem 2.4rem;
      display: flex;
      gap: 0.6rem;
      flex-direction: column;
      width: 100%;
      > span {
        font-size: clamp(2rem, 3vw, 2.4rem);
      }
    }
    h1 {
      margin-bottom: 3rem;
      span {
        font-size: clamp(5.2rem, 9vw, 8rem);
        font-weight: 700;
      }
    }
  }
  button {
    align-self: flex-start;
    font-size: clamp(1.8rem, 3.6vw, 2.2rem);
    padding: ${1.6 / 2.2}em ${5.2 / 2.2}em;
    &:hover {
      background-color: ${({ theme: { c } }) => darken(0.1, c.red)};
    }
  }
  @media only screen and (min-width: 768px) {
    min-height: calc(100vh - 80px);
    h1 {
      span {
        display: block;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    > div {
      > div {
        padding-left: 6rem;
      }
    }
  }
`;

const MfHero = () => {
  return (
    <MfHeroStyled>
      <div>
        <Wrapper>
          <span>Desenvolvedores prontos para ação</span>
          <h1>
            <span>Seu projeto pronto </span>
            <span>na velocidade da luz</span>
          </h1>
          <Button>Peça uma reunião</Button>
        </Wrapper>
      </div>
    </MfHeroStyled>
  );
};

export default MfHero;
