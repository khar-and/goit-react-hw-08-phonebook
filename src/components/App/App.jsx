// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { useEffect } from 'react';
// // import { ContactList } from './ContactList/ContactList';
// // import ContactForm from './ContactForm/ContactForm';
// // import { Filter } from './Filter/Filter';
// // import { selectIsLoading, selectError } from '../redux/selectors';
// // import { fetchContacts } from '../redux/operations';
// // import { MainTitle, Title } from './App.styled';

// // document.title = 'PhonebookBox_redux';

// // const App = () => {
// //   const dispatch = useDispatch();
// //   const isLoading = useSelector(selectIsLoading);
// //   const error = useSelector(selectError);

// //   useEffect(() => {
// //     dispatch(fetchContacts());
// //   }, [dispatch]);

// //   return (
// //     <div>
// //       <MainTitle>Phonebook</MainTitle>
// //       <ContactForm />
// //       <Title>Contacts</Title>
// //       <Filter />
// //       {isLoading && !error && <p>Loading...</p>}
// //       <ContactList />
// //     </div>
// //   );
// // };

// // export default App;

// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import { Layout } from '../Layout/Layout';
// import { PrivateRoute } from '../PrivateRoute';
// import { RestrictedRoute } from '../RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';
// import { useAuth } from '../../hooks/useAuth';
// import PhoneIcons from '../PhoneIcons/PhoneIcons';
// import { Wrapper } from './App.styled';

// const Home = lazy(() => import('pages/Home'));
// const Register = lazy(() => import('pages/Register'));
// const Login = lazy(() => import('pages/Login'));
// const Contacts = lazy(() => import('pages/Contacts'));

// export const App = () => {
//   const dispatch = useDispatch(); // Отримуємо функцію dispatch для відправки дій до Redux store
//   const { isRefreshing } = useAuth(); // Отримуємо стан аутентифікації користувача

//   useEffect(() => {
//     dispatch(refreshUser()); // Викликаємо функцію оновлення користувача при монтажі компонента або зміні dispatch
//   }, [dispatch]);

//   // Перевіряємо, чи триває процес оновлення користувача
//   // Якщо так, відображаємо текст "Оновлення користувача..."
//   // Якщо ні, відображаємо структуру маршрутизації додатка
//   return isRefreshing ? (
//     <p>Оновлення користувача...</p>
//   ) : (
//     <Wrapper>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           {/*Головна сторінка */}
//           <Route index element={<Home />} />
//           {/* Сторінка реєстрації користувача */}
//           <Route
//             path="/register"
//             element={
//               <RestrictedRoute redirectTo="/login" component={<Register />} />
//             }
//           />
//           {/* Сторінка входу користувача */}
//           <Route
//             path="/login"
//             element={
//               <RestrictedRoute redirectTo="/contacts" component={<Login />} />
//             }
//           />
//           {/* Сторінка контактів (доступна тільки для авторизованих користувачів) */}
//           <Route
//             path="/contacts"
//             element={
//               <PrivateRoute redirectTo="/login" component={<Contacts />} />
//             }
//           />
//         </Route>
//         {/* Маршрут за замовчуванням (якщо ні один інший маршрут не співпадає) */}
//         <Route path="*" element={<Home />} />
//       </Routes>
//       <PhoneIcons />
//     </Wrapper>
//   );
// };

import React from 'react';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { Dna } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import Home from 'pages/Home';
import Layout from './layout/Layout';
document.title = 'PhonebookBox_redux';

const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
      <ToastContainer
        font-size="15px"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
