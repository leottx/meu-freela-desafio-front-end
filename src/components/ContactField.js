import { darken } from 'polished';
import styled from 'styled-components';

// COMPONENTES
const ContactField = styled.input.attrs({ type: 'text' })`
  font-size: 1.8rem;
  border-radius: 8px;
  border: 1px solid ${({ theme: { c } }) => c.grayLight};
  background: ${({ theme: { c } }) => c.white};
  height: 5.6rem;
  padding: 0 1.6rem;
  display: block;
  outline: none;
  &::placeholder {
    color: ${({ theme: { c } }) => c.gray};
  }
  &:focus {
    border-color: ${({ theme: { c } }) => darken(0.08, c.gray)};
    border-width: 2px;
  }
`;

export default ContactField;
