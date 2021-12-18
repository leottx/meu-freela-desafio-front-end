import React from 'react';
import styled from 'styled-components';

const MfFooterStyled = styled.footer`
  background: ${({ theme: { c } }) => c.grayLighter};
  padding: 3rem 2.4rem;
  font-size: 1.4rem;
  p {
    text-align: center;
    line-height: 1.5;
  }
  span {
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const MfFooter = () => {
  return (
    <MfFooterStyled>
      <p>
        Desafio 1 - front-end iniciante
        <br />
        Iniciativa <span>dev hall</span>
      </p>
    </MfFooterStyled>
  );
};

export default MfFooter;
