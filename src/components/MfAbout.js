import React from 'react';

import styled from 'styled-components';

// IMAGENS
import ThinkingMan from '@Images/thinking-man.png';

// COMPONENTS
import WrapperMain from '@Components/WrapperMain';

const MfAboutStyled = styled.section`
  background: ${({ theme: { c } }) => c.white};
  color: ${({ theme: { c } }) => c.grayDark};
  position: relative;
  &::before {
    content: '';
    height: 120px;
    background: ${({ theme: { c } }) => c.grayLight};
    bottom: 0;
    position: absolute;
    left: 0;
    right: 0;
    clip-path: polygon(0 50%, 100% 0, 100% 100%, 0% 100%);
  }
  > div {
    display: flex;
    gap: 7rem;
    padding: 2.4rem 2.4rem 0;
    > div:first-child {
      width: 60%;
      margin-top: 6rem;
    }
    > div:last-child {
      width: auto;
      align-self: flex-end;
      img {
        width: 100%;
        display: block;
      }
    }
  }
  h2 {
    font-size: 5.2rem;
    font-weight: 700;
    margin-bottom: 4rem;
  }
  p {
    font-size: 2.2rem;
    line-height: 1.5;
    margin-bottom: 12rem;
  }
`;

const MfAbout = () => {
  return (
    <MfAboutStyled>
      <WrapperMain>
        <div>
          <h2>Nossa iniciativa</h2>
          <p>
            Somos desenvolvedores que se dedicam a fazer projetos perfeitos e
            entregar valor para todos os seus clientes. Gostamos de ver clientes
            satisfeitos com projetos feitos com carinho, atenção e qualidade
            altíssima.
          </p>
        </div>
        <div>
          <img src={ThinkingMan} alt='Homem segurando o queixo pensativo' />
        </div>
      </WrapperMain>
    </MfAboutStyled>
  );
};

export default MfAbout;
