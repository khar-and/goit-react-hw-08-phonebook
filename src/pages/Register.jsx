// import { RegisterForm } from 'components/RegisterForm/RegisterForm';

// // Компонент Register відповідає за відображення сторінки реєстрації
// export default function Register() {
//   return (
//     <>
//       <title>Registration</title>
//       <RegisterForm /> {/* Відображення форми для реєстрації */}
//     </>
//   );
// }

import { RegisterForm } from 'components/form/authForms/RegisterForm';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h2>Registration</h2>
      <RegisterForm />
      <p className="TextAuth">
        Already registered? <NavLink to={'/login'}>Sign in</NavLink>
      </p>
    </div>
  );
};

export default Register;
