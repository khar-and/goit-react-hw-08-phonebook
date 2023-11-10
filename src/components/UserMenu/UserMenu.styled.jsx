// import styled from 'styled-components';

// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
// `;

// export const Text = styled.p`
//   font-weight: 700;
//   color: #f08080;
//   font-size: 20px;
// `;

// export const Button = styled.button`
//   padding: 4px 6px;
//   font: inherit;
//   cursor: pointer;
//   border-radius: 4px 8px;
//   border: 3px solid #f08080;
//   color: #f08080;
//   font-size: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px 10px;

//   &:hover {
//     background-color: #b9bcd3;
//   }
// `;

import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/getColorsFn';

export const UserTitle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  p {
    font-size: 22px;
    &::first-letter {
      color: ${getRandomHexColor()};
    }
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    &:hover,
    &:focus {
      background-color: ${getRandomHexColor()};
      color: #fff;
      cursor: pointer;
    }
  }
`;
