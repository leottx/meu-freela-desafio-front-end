import React, { useReducer } from 'react';
import styled from 'styled-components';

// UTILIDADES
import { lighten } from 'polished';

// COMPONENTES
import WrapperMain from '@Components/WrapperMain';
import { SectionTitle, SectionText } from '@Components/SectionText';
import Button from '@Components/Button';
import ContactField from '@Components/ContactField';

const MfAboutStyled = styled.section`
  background: ${({ theme: { c } }) => c.grayLightest};
  color: ${({ theme: { c } }) => c.grayDark};
  padding: 3.6rem 0 5.2rem;
  > div {
    padding: 0 2.4rem;
  }
  h2 {
    margin-bottom: 3rem;
  }
  p {
    margin-bottom: 3.6rem;
  }
  form {
    display: grid;
    gap: 2rem;
    grid-template-areas:
      'name'
      'number'
      'button';
    > div:first-child {
      grid-area: name;
    }
    > div:last-child {
      grid-area: number;
    }
  }
  label {
    font-size: 1.4rem;
    font-weight: 700;
    display: block;
    margin-bottom: 3px;
  }
  input {
    width: 100%;
  }
  button {
    grid-area: button;
    height: 5.6rem;
    background: ${({ theme: { c } }) => c.green};
    &:hover {
      background-color: ${({ theme: { c } }) => lighten(0.06, c.green)};
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 7.4rem 0 8rem;
    form {
      grid-template-areas:
        'name number'
        'button button';
    }
  }

  @media only screen and (min-width: 992px) {
    form {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: 'name number button';
      button {
        align-self: end;
      }
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
          <div>
            <label>Nome Completo</label>
            <ContactField placeholder='Ex: Mateus Ávila Isidoro' />
          </div>
          <div>
            <label>Whatsapp</label>
            <ContactField placeholder='(99) 99999-9999' />
          </div>
          <Button>Peça uma reunião</Button>
        </form>
      </WrapperMain>
    </MfAboutStyled>
  );
};

export default MfContact;
