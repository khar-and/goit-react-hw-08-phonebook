// import { Navigate } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';

// // Компонент RestrictedRoute відповідає за обмежений маршрут, який доступний тільки для неввійшовших користувачів
// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();

//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component; // Перенаправляємо на redirectTo, якщо користувач вже авторизований, інакше рендеримо компонент Component
// };

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
