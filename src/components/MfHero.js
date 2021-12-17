import React from 'react';
import styled from 'styled-components';

// COMPONENTES
import Wrapper from '@Components/Wrapper';
import Button from '@Components/Button';
import { darken } from 'polished';

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
    min-height: calc(100vh - 8rem);
    align-items: center;
    > div {
      padding: 4.8rem clamp(2.4rem, 6vw, 6rem);
      display: flex;
      gap: 3rem;
      flex-direction: column;
      width: 100%;
      /* padding: 4.8rem 2.4rem; */
    }
    h1 {
      color: ${({ theme: { c } }) => c.white};
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      span {
        display: block;
        &:first-of-type {
          font-size: clamp(1.6rem, 4.8vw, 2.4rem);
        }
        &:last-of-type {
          font-weight: 700;
          font-size: clamp(4.2rem, 9vw, 8rem);
        }
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
`;

const MfHero = () => {
  return (
    <MfHeroStyled>
      <div>
        <Wrapper>
          <h1>
            <span>Desenvolvedores prontos para ação</span>
            <span>
              Seu projeto pronto <br></br> na velocidade da luz
            </span>
          </h1>
          <Button>Peça uma reunião</Button>
        </Wrapper>
      </div>
    </MfHeroStyled>
  );
};

export default MfHero;
