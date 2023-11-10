// // import { useDispatch, useSelector } from 'react-redux';
// // import { addContact } from '../../redux/operations';
// // import { selectContacts } from '../../redux/selectors';

// // import { Form, Button, Input, Label } from './ContactForm.styled';

// // const ContactForm = () => {
// //   const dispatch = useDispatch();
// //   const contacts = useSelector(selectContacts);

// //   function handlerSubmit(evt) {
// //     evt.preventDefault();
// //     const form = evt.target;
// //     const name = form.name.value;
// //     const phone = form.number.value;

// //     if (
// //       contacts.find(
// //         contact => contact.name.toLowerCase() === name.toLowerCase()
// //       )
// //     ) {
// //       return alert(`${name} is alredy in contacts.`);
// //     }

// //     dispatch(addContact({ name, phone }));

// //     alert(`${name} is added to the contact list!`);

// //     form.reset();
// //   }

// //   return (
// //     <Form onSubmit={handlerSubmit}>
// //       <Label>
// //         Name{' '}
// //         <Input
// //           type="text"
// //           name="name"
// //           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// //           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// //           required
// //         />
// //       </Label>
// //       <Label>
// //         Number{' '}
// //         <Input
// //           type="tel"
// //           name="number"
// //           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// //           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// //           required
// //         />
// //       </Label>

// //       <Button type="submit">Add contact</Button>
// //     </Form>
// //   );
// // };

// // export default ContactForm;

// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { useSelector, useDispatch } from 'react-redux';
// import { Filter } from 'components/Filter/Filter';
// import { selectContacts } from 'redux/contacts/selectors';
// import { addContacts } from 'redux/contacts/operations';
// import { Form, Label, Input, Button } from './ContactForm.styled';
// import { ReactComponent as AddIcon } from 'icons/add.svg';

// //Генерація унікальних ідентифікаторів для полів форми.
// const nameInputId = nanoid();
// const numberInputId = nanoid();

// // Компонент ContactForm відповідає за форму додавання нового контакту
// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   // Обробка відправлення форми.
//   const handleSubmit = event => {
//     event.preventDefault();

//     // Перевіряємо, чи контакт з таким іменем вже існує в списку контактів
//     const isInContacts = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     // Перевіряє, чи існує контакт із таким самим ім'ям у списку контактів. Якщо контакт вже існує, виводиться попередження.
//     if (isInContacts) {
//       alert(`${name} вже в контактах☝️`);

//       return;
//     }

//     // Відправляємо дію для додавання нового контакту до Redux store
//     dispatch(addContacts({ name, number }));

//     setName('');
//     setNumber('');
//   };

//   // Обробка зміни значень полів форми.
//   const handleChange = event => {
//     const { name, value } = event.currentTarget;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Label htmlFor={nameInputId}>
//           Name
//           <Input
//             type="text"
//             name="name"
//             placeholder="Введіть ім'я"
//             value={name}
//             onChange={handleChange}
//             pattern="^[^\d]+$"
//             title="Ім'я має містити лише літери, апострофи, дефіси та відступи"
//             required
//           />
//         </Label>

//         <Label htmlFor={numberInputId}>
//           Number
//           <Input
//             type="tel"
//             name="number"
//             placeholder="Введіть номер телефону"
//             value={number}
//             onChange={handleChange}
//             pattern="\+\d{12}"
//             minlength="13"
//             maxlength="13"
//             title="Номер телефону має починатися з +, а потім 12 цифр"
//             required
//           />
//         </Label>

//         <Button type="submit">
//           <AddIcon fill="#f08080" width="25" height="25" />
//           Add contact{' '}
//         </Button>
//       </Form>
//       <Filter />
//     </>
//   );
// };

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';
import { selectContacts } from '../../redux/contacts/selectors';
import { IoPersonAdd } from 'react-icons/io5';
import { Form, FormList, FormListItem, FormButton } from './ContactForm.styles';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handlerSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const number = form.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.warn(`${name} is alredy in contacts.`);
    }

    dispatch(addContact({ name, number }));

    form.reset();
  }

  return (
    <Form onSubmit={handlerSubmit}>
      <FormList>
        <FormListItem>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormListItem>
        <FormListItem>
          <p>Contact</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormListItem>
      </FormList>

      <FormButton type="submit">
        <IoPersonAdd />
        Add contact
      </FormButton>
    </Form>
  );
};

export default ContactForm;
