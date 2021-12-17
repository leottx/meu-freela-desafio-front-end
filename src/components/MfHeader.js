import React from 'react';
import styled from 'styled-components';

// ICONES
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

// COMPONENTES
import Wrapper from '@Components/Wrapper';

const MfHeaderStyled = styled.header`
  background: ${({ theme: { c } }) =>
    `linear-gradient(180deg, ${c.redDark} 0%, ${c.red} 100%);`};
  position: sticky;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  > div {
    padding: 0 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 3rem;
    font-weight: 700;
    height: 8rem;
    color: ${({ theme: { c } }) => c.white};
  }
  h1 {
    font-weight: 700;
  }
  ul {
    display: flex;
    gap: 1.6rem;
    li {
      display: block;
    }
    svg {
      display: block;
      margin: auto;
    }
  }
  a {
    color: inherit;
  }
`;

const MfHeader = () => {
  return (
    <MfHeaderStyled>
      <Wrapper>
        <a href='#'>MeuFreela</a>
        <ul>
          <li>
            <a href='https://linkedin.com'>
              <FaLinkedinIn size={32} />
            </a>
          </li>
          <li>
            <a href='https://instagram.com'>
              <FaInstagram size={32} />
            </a>
          </li>
          <li>
            <a href='https://twitter.com'>
              <FaTwitter size={32} />
            </a>
          </li>
        </ul>
      </Wrapper>
    </MfHeaderStyled>
  );
};

export default MfHeader;
