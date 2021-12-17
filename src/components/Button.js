import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: ${1.6 / 2.2}em ${5.2 / 2.2}em;
  font-size: 2.2rem;
  border-radius: 0.8rem;
  background: ${({ theme: { c } }) => c.red};
  color: ${({ theme: { c } }) => c.white};
`;

export default Button;
