import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

// COMPONENTES
import WrapperMain from '@Components/WrapperMain';
import { SectionTitle, SectionText } from '@Components/SectionText';
import Button from '@Components/Button';

import ContactField from './ContactField';

const MfAboutStyled = styled.section`
  background: ${({ theme: { c } }) => c.grayLightest};
  color: ${({ theme: { c } }) => c.grayDark};
  padding: 7.4rem 0 8rem;
  > div {
    padding: 0 2.4rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 3.6rem;
  }
  form {
    display: grid;
    grid: auto auto / repeat(3, 1fr);
    grid-template-areas:
      'lname lnumber -'
      'iname inumber button';
    gap: 3px 2.2rem;
  }
  label {
    font-size: 1.4rem;
    font-weight: 700;
    &:first-of-type {
      grid-area: lname;
    }
    &:last-of-type {
      grid-area: lnumber;
    }
  }
  input {
    &:first-of-type {
      grid-area: iname;
    }
    &:last-of-type {
      grid-area: inumber;
    }
  }
  button {
    grid-area: button;
    padding: ${1.6 / 2.2}em 2rem;
    background: ${({ theme: { c } }) => c.green};
    &:hover {
      background-color: ${({ theme: { c } }) => lighten(0.06, c.green)};
    }
  }
`;

const MfContact = () => {
  return (
    <MfAboutStyled>
      <WrapperMain>
        <SectionTitle>Mande um oi, ligamos para você!</SectionTitle>
        <SectionText>
          Preencha seus dados para que a gente possa entrar em contato.
        </SectionText>
        <form>
          <label>Nome Completo</label>
          <ContactField placeholder='Ex: Mateus Ávila Isidoro' />
          <label>Whatsapp</label>
          <ContactField placeholder='(99) 99999-9999' />
          <Button>Peça uma reunião</Button>
        </form>
      </WrapperMain>
    </MfAboutStyled>
  );
};

export default MfContact;
