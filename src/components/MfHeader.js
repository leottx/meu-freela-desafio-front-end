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
    font-weight: 700;
    height: 6.4rem;
    color: ${({ theme: { c } }) => c.white};
  }
  ul {
    display: flex;
    gap: 1.6rem;
    li {
      display: block;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      &:hover {
        transform: scale(1.15);
      }
    }
    svg {
      display: block;
      margin: auto;
    }
  }
  a {
    font-size: 2.4rem;
    color: inherit;
  }

  li {
    a {
      font-size: 2.7rem;
    }
  }

  @media only screen and (min-width: 768px) {
    > div {
      font-size: 3rem;
      height: 8rem;
    }
    a {
      font-size: 3rem;
    }
    li {
      a {
        font-size: 3rem;
      }
    }
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
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href='https://instagram.com'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='https://twitter.com'>
              <FaTwitter />
            </a>
          </li>
        </ul>
      </Wrapper>
    </MfHeaderStyled>
  );
};

export default MfHeader;
