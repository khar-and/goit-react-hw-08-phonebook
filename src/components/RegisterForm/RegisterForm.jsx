// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import { Form, Label, Input, Button } from './RegisterForm.styles';

// // Компонент RegisterForm відповідає за форму реєстрації нового користувача
// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     // Викликаємо дію register з параметрами name, email та password, які отримуємо зі значень полів форми
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset(); // Очищуємо значення полів форми після відправки
//   };

//   return (
//     <Form onSubmit={handleSubmit} autoComplete="off">
//       <Label>
//         Username
//         <Input
//           type="text"
//           name="name"
//           placeholder="Введіть ім'я"
//           pattern="^[^\d]+$"
//           title="Ім'я має містити лише літери, апострофи, дефіси та відступи"
//           required
//         />
//       </Label>
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
//       <Button type="submit">Register</Button>
//     </Form>
//   );
// };

import { useDispatch } from 'react-redux';

import { Form } from './authForm.styles';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="name"
          required
          placeholder="Anna Smith"
          minLength={3}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="my-mail@gmail.com"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          minLength={7}
          required
          placeholder="*******"
        />
      </label>
      <button type="submit">Register</button>
    </Form>
  );
};
