// // import { useSelector, useDispatch } from 'react-redux';
// // import { deleteContact } from '../../redux/operations';

// // import { selectContacts, selectContactsFilter } from '../../redux/selectors';
// // import { Button, Item, List } from './ContactList.styled';

// // // компонент використовую список контактів з стору через useSelector
// // export function ContactList() {
// //   const contacts = useSelector(selectContacts);

// //   const filterValue = useSelector(selectContactsFilter).toLowerCase();

// //   // надсилання екшона видалення контакту за допомогою useDispatch
// //   const dispatch = useDispatch();

// //   const handleDelete = evt => {
// //     dispatch(deleteContact(evt.currentTarget.id));

// //     // ^ сповіщення має відображатись у featch??
// //     alert(`This contact is delited from your phonebook!`);
// //   };

// //   const getVisibilityContacts = () => {
// //     if (!filterValue || filterValue === '') {
// //       return contacts;
// //     }

// //     return contacts.filter(contact =>
// //       contact.name.toLowerCase().includes(filterValue)
// //     );
// //   };

// //   const visibilityContacts = getVisibilityContacts();

// //   return (
// //     <List>
// //       {visibilityContacts.map(contact => (
// //         <Item key={contact.id}>
// //           <p>
// //             {contact.name}: <span>{contact.phone}</span>
// //           </p>
// //           <Button type="button" id={contact.id} onClick={handleDelete}>
// //             Delete
// //           </Button>
// //         </Item>
// //       ))}
// //     </List>
// //   );
// // }

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectVisibleContacts } from 'redux/contacts/selectors';
// import { useDispatch } from 'react-redux';
// import { deleteContacts } from 'redux/contacts/operations';
// import { List, Item, Button } from './ContactList.styled';
// import { ReactComponent as DeleteIcon } from 'icons/delete.svg';

// // Компонент ContactList відповідає за відображення списку контактів
// export const ContactList = () => {
//   const contacts = useSelector(selectVisibleContacts);
//   const dispatch = useDispatch();

//   return (
//     <List>
//       {contacts.map(contact => (
//         <Item key={contact.id}>
//           {contact.name + ' : ' + contact.number}
//           {
//             <Button
//               type="button"
//               name="delete"
//               onClick={() => dispatch(deleteContacts(contact.id))}
//             >
//               <DeleteIcon fill="#000000" width="20" height="20" />
//               delete
//             </Button>
//           }
//         </Item>
//       ))}
//     </List>
//   );
// };

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectContacts,
  selectContactsFilter,
} from '../../redux/contacts/selectors';
import { IoPersonOutline, IoClose } from 'react-icons/io5';
import {
  ContactsList,
  ContactItem,
  ContactIcon,
  ContactText,
  ContactDelete,
} from './ContactList.styles';
import { getRandomHexColor } from '../../utils/getColorsFn';

// компонент використовую список контактів з стору через useSelector
export function ContactList() {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectContactsFilter).toLowerCase();

  // надсилання екшона видалення контакту за допомогою useDispatch
  const dispatch = useDispatch();

  const handleDelete = evt => {
    dispatch(deleteContact(evt.currentTarget.id));
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <ContactsList>
      {visibilityContacts.map(contact => (
        <ContactItem key={contact.id} rgb={getRandomHexColor()}>
          <ContactIcon>
            <IoPersonOutline />
          </ContactIcon>
          <ContactText rgb={getRandomHexColor()}>
            {contact.name}: <span>{contact.number}</span>
          </ContactText>
          <ContactDelete type="button" id={contact.id} onClick={handleDelete}>
            <IoClose />
            {/* Delete */}
          </ContactDelete>
        </ContactItem>
      ))}
    </ContactsList>
  );
}
