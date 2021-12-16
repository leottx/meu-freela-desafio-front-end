import React from 'react';
import styled from 'styled-components';

// ICONES
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

// COMPONENTES
const MfHeaderStyled = styled.header`
  background: ${({ theme: { c } }) =>
    `linear-gradient(180deg, ${c.redDark} 0%, ${c.red} 100%);`};
  padding: ${({ theme: { s } }) => `${s[0]}rem ${s[1]}rem`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme: { fs } }) => `${fs[2]}rem`};
  color: ${({ theme: { c } }) => c.white};
  h1 {
    font-weight: 700;
  }
  ul {
    display: flex;
    gap: ${({ theme: { s } }) => `${s[0]}rem`};
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
      <h1>
        <a href='#'>MeuFreela</a>
      </h1>
      <ul>
        <li>
          <a href='https://linkedin.com'>
            <FaLinkedinIn size={24} />
          </a>
        </li>
        <li>
          <a href='https://instagram.com'>
            <FaInstagram size={24} />
          </a>
        </li>
        <li>
          <a href='https://twitter.com'>
            <FaTwitter size={24} />
          </a>
        </li>
      </ul>
    </MfHeaderStyled>
  );
};

export default MfHeader;
