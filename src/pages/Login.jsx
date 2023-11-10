// import { LoginForm } from 'components/LoginForm/LoginForm';

// // Компонент Login відповідає за відображення сторінки входу в систему
// export default function Login() {
//   return (
//     <>
//       <title>Login</title>
//       <LoginForm /> {/* Відображення форми для входу в систему */}
//     </>
//   );
// }

import { LoginForm } from 'components/form/authForms/LoginForm';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Log In</h2>
      <LoginForm />
      <p className="TextAuth">
        Don't have an account? <NavLink to="/register">Sign up</NavLink>
      </p>
    </div>
  );
};

export default Login;
