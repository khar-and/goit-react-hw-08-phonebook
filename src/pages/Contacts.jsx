// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectLoading } from 'redux/contacts/selectors';
// import { Loader } from '../components/Loader/Loader';

// // Компонент Tasks відповідає за відображення списку контактів та їх форми
// export default function Tasks() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchContacts()); // Виконуємо запит для отримання контактів з сервера
//   }, [dispatch]);

//   return (
//     <>
//       <title>Your contacts</title>
//       <ContactForm /> {/* Компонент форми для додавання контакту */}
//       <div>{isLoading && <Loader />}</div>{' '}
//       {/* Відображення повідомлення про виконання запиту */}
//       <ContactList /> {/* Компонент для відображення списку контактів */}
//     </>
//   );
// }

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Dna } from 'react-loader-spinner';

import { fetchContacts } from '../redux/contacts/operations';
import { ContactList } from 'components/contacts/ContactList';
import { Filter } from 'components/filter/Filter';
import ContactForm from 'components/form/ContactForm';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      <ContactList />
    </div>
  );
};

export default Contacts;
