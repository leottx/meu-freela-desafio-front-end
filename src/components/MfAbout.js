import React from 'react';
import styled from 'styled-components';

// IMAGENS
import ThinkingMan from '@Images/thinking-man.png';

// COMPONENTES
import WrapperMain from '@Components/WrapperMain';
import { SectionTitle, SectionText } from './SectionText';

const MfAboutStyled = styled.section`
  background: ${({ theme: { c } }) => c.grayLightest};
  color: ${({ theme: { c } }) => c.grayDark};
  position: relative;
  &::before {
    content: '';
    height: 120px;
    background: ${({ theme: { c } }) => c.grayLighter};
    bottom: 0;
    position: absolute;
    left: 0;
    right: 0;
    clip-path: polygon(0 50%, 100% 0, 100% 100%, 0% 100%);
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 0rem 2.4rem;
    > div:first-child {
      margin-top: 3.6rem;
    }
    > div:last-child {
      max-width: 350px;
      margin-left: auto;
      img {
        width: 100%;
        display: block;
      }
    }
  }
  h2 {
    margin-bottom: 3rem;
  }

  @media only screen and (min-width: 768px) {
    > div {
      flex-direction: row;
      gap: 7rem;
      padding: 3rem 2.4rem 0;
      > div:first-child {
        width: 60%;
        margin-top: 6rem;
      }
      > div:last-child {
        max-width: initial;
        align-self: flex-end;
      }
    }
    h2 {
      margin-bottom: 4rem;
    }
    p {
      margin-bottom: 12rem;
    }
  }
`;

const MfAbout = () => {
  return (
    <MfAboutStyled>
      <WrapperMain>
        <div>
          <SectionTitle>Nossa iniciativa</SectionTitle>
          <SectionText>
            Somos desenvolvedores que se dedicam a fazer projetos perfeitos e
            entregar valor para todos os seus clientes. Gostamos de ver clientes
            satisfeitos com projetos feitos com carinho, atenção e qualidade
            altíssima.
          </SectionText>
        </div>
        <div>
          <img src={ThinkingMan} alt='Homem segurando o queixo pensativo' />
        </div>
      </WrapperMain>
    </MfAboutStyled>
  );
};

export default MfAbout;
