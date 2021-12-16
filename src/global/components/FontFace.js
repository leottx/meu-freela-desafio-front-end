import { createGlobalStyle } from 'styled-components';

import RobotoBold from '@Fonts/Roboto-Bold.ttf';
import RobotoRegular from '@Fonts/Roboto-Regular.ttf';

const FontFace = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  };
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  };
`;

export default FontFace;
