import styled from 'styled-components';

// COMPONENTES
const Button = styled.button`
  font-size: 2.2rem;
  border-radius: 0.8rem;
  background: ${({ theme: { c } }) => c.red};
  color: ${({ theme: { c } }) => c.white};
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

export default Button;
