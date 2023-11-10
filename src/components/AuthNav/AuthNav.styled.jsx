// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// export const Wrapper = styled.div``;

// export const Link = styled(NavLink)`
//   display: inline-block;
//   text-decoration: none;
//   padding: 12px;
//   font-weight: 700;
//   color: #f08080;
//   font-size: 20px;

//   &:hover {
//     color: #ffffff;
//   }
// `;

import styled from 'styled-components';
import { getRandomHexColor } from 'utils/getColorsFn';

export const Form = styled.form`
  padding-top: 20px;

  width: 320px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    font-size: 20px;
  }

  input {
    padding: 8px;
  }

  button {
    margin-top: 15px;
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
