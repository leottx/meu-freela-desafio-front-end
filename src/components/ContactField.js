import React from 'react';
import styled from 'styled-components';

const ContactField = styled.input.attrs({ type: 'text' })`
  font-size: 1.8rem;
  border-radius: 8px;
  border: 1px solid ${({ theme: { c } }) => c.grayLight};
  background: ${({ theme: { c } }) => c.white};
  padding: 1.6rem;
  outline: none;
  &::placeholder {
    color: ${({ theme: { c } }) => c.gray};
  }
  &:focus {
    border-color: ${({ theme: { c } }) => c.red};
  }
`;

export default ContactField;
