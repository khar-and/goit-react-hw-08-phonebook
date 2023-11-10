// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

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
import { NavLink } from 'react-router-dom';

import { getRandomHexColor } from '../../utils/getColorsFn';

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 25px; */
`;

export const NavAuthBox = styled.div`
  display: flex;
  gap: 25px;
`;

export const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 25px;

  &:hover,
  &:focus {
    color: ${getRandomHexColor()};
    /* font-weight: bold; */
  }

  &.active {
    color: ${getRandomHexColor()};
  }
`;
