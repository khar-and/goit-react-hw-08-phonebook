// import styled from 'styled-components';

// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: calc(100vh - 600px);
// `;

// export const Title = styled.h1`
//   font-weight: 900;
//   font-size: 48;
//   text-align: center;
//   color: #f08080;
// `;

import styled from 'styled-components';
import { getRandomHexColor } from '../utils/getColorsFn';

export const SectionHome = styled.section`
  h1 {
    font-size: 55px;

    &::first-letter {
      color: ${getRandomHexColor()};
    }
  }

  p {
    font-size: 20px;
  }

  span {
    color: ${getRandomHexColor()};
  }
`;
