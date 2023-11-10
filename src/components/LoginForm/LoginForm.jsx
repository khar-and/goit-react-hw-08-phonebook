// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
// import { Form, Label, Input, Button } from './LoginForm.styled';

// // Компонент LoginForm відповідає за форму авторизації користувача
// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     // Викликаємо дію logIn з параметрами email та password, які отримуємо зі значень полів форми
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset(); // Очищуємо значення полів форми після відправки
//   };

//   return (
//     <Form onSubmit={handleSubmit} autoComplete="off">
//       <Label>
//         Email
//         <Input
//           type="email"
//           name="email"
//           placeholder="Введіть адресу електронної пошти"
//           pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
//           title="Будь ласка, введіть дійсну адресу електронної пошти"
//           required
//         />
//       </Label>
//       <Label>
//         Password
//         <Input
//           type="password"
//           name="password"
//           placeholder="Введіть пароль"
//           pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
//           title="Пароль повинен містити тільки латинські літери (як великі, так і малі), цифри та інші символи"
//           required
//         />
//       </Label>
//       <Button type="submit">Log In</Button>
//     </Form>
//   );
// };

import { useDispatch, useSelector } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
import { Form } from './authForm.styles';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      {errorLogin && <div>Error login</div>}
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </>
  );
};
