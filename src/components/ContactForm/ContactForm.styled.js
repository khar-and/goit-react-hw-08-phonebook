// // import { styled } from 'styled-components';

// // export const Form = styled.form`
// //   display: flex;
// //   flex-direction: column;
// //   width: 400px;
// //   padding: 12px;
// //   margin-left: auto;
// //   margin-right: auto;
// //   border: 3px solid blue;
// //   border-radius: 4px;
// // `;

// // export const Label = styled.label`
// //   display: flex;
// //   flex-direction: column;
// //   margin-bottom: 16px;
// //   font-size: 20px;
// // `;

// // export const Input = styled.input`
// //   padding: 8px 12px;
// //   font: inherit;
// //   cursor: pointer;
// //   border: 1px solid blue;
// //   border-radius: 4px;
// // `;

// // export const Button = styled.button`
// //   padding: 8px 12px;
// //   font: inherit;
// //   cursor: pointer;
// //   border-radius: 4px;
// //   border: 3px solid blue;

// //   font-size: 20px;
// //   font-weight: 700;
// //   &:hover {
// //     color: red;
// //     scale: 1.1;
// //   }
// // `;

// import styled from 'styled-components';

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 400px;
//   padding: 12px;
//   background-color: rgba(0, 0, 0, 0.6);
//   border: 3px solid #f08080;
//   border-radius: 4px;
//   margin: 0 auto;
// `;

// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 16px;
//   color: #f08080;
//   font-size: 20px;
// `;

// export const Input = styled.input`
//   color: #171718;
//   padding: 8px 12px;
//   font: inherit;
//   cursor: pointer;
// `;

// export const Button = styled.button`
//   padding: 8px 12px;
//   font: inherit;
//   cursor: pointer;
//   border-radius: 4px;
//   border: 3px solid #f08080;
//   color: #f08080;
//   font-size: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     background-color: #b9bcd3;
//   }
// `;

import styled from 'styled-components';

export const Section = styled.section`
  max-width: 540px;
`;

export const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    padding: 8px;
  }
`;

export const FormList = styled.ul`
  padding: 0;
  display: flex;
`;

export const FormListItem = styled.li`
  margin-right: 10px;
  p {
    margin-bottom: 8px;
    font-size: 25px;
  }
`;

export const FormButton = styled.button`
  border-radius: 5px;
  height: 40px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    background-color: green;
    cursor: pointer;
  }

  svg {
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }
`;
