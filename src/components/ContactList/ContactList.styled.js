// // import { styled } from 'styled-components';

// // export const List = styled.ul`
// //   display: flex;
// //   justify-content: center;
// //   flex-direction: column;
// //   margin-left: auto;
// //   margin-right: auto;
// //   width: 400px;
// //   padding: 12px;
// //   border-radius: 4px;
// //   /* background-color: rgba(0, 0, 0, 0.6); */
// //   border: 3px solid blue;
// //   list-style: none;
// // `;

// // export const Item = styled.li`
// //   background-color: #ffffff;
// //   border: 3px solid blue;
// //   padding: 10px;
// //   border-radius: 4px;
// //   margin-bottom: 5px;
// //   display: flex;
// //   align-items: center;
// //   justify-content: space-between;
// //   font-size: 15px;
// // `;

// // export const Button = styled.button`
// //   padding: 4px 8px;
// //   font: inherit;
// //   cursor: pointer;
// //   border-radius: 8px;
// //   border: 3px solid blue;
// //   font-weight: 700;
// //   &:hover {
// //     color: red;
// //     scale: 1.1;
// //   }
// // `;

// import styled from 'styled-components';

// export const List = styled.ul`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   width: 400px;
//   padding: 12px;
//   border-radius: 4px;
//   background-color: rgba(0, 0, 0, 0.6);
//   border: 3px solid #f08080;
//   margin: 0 auto;
// `;

// export const Item = styled.li`
//   background-color: #ffffff;
//   border: 3px solid #f08080;
//   padding: 10px;
//   border-radius: 4px;
//   margin-bottom: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   font-size: 20px;
// `;

// export const Button = styled.button`
//   padding: 4px 8px;
//   font: inherit;
//   cursor: pointer;
//   border-radius: 4px 8px;
//   border: 3px solid #f08080;
//   display: flex;
//   align-items: center;

//   &:hover {
//     background-color: #b9bcd3;
//   }
// `;

import styled from 'styled-components';

export const ContactsList = styled.ul`
  padding: 10px;
`;

export const ContactItem = styled.li`
  /* font-size: 26px; */
  margin-bottom: 10px;
  padding: 8px;
  display: flex;
  align-items: center;

  border: solid 1px #787878;
  border-radius: 5px;
`;

export const ContactIcon = styled.div`
  margin-right: 15px;
  border: 1px solid #787878;
  border-radius: 4px;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ContactText = styled.p`
  font-size: 24px;
  ::first-letter {
    color: ${p => p.rgb};
  }
  span {
    text-decoration: underline;
  }
`;

export const ContactDelete = styled.button`
  color: black;
  margin-right: 0;
  margin-left: auto;
  border: none;
  border-radius: 5px;
  height: 40px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;

  /* background-color: #f7f7f7; */

  svg {
    width: 25px;
    height: 25px;
  }

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    background-color: red;
    cursor: pointer;
  }
`;
