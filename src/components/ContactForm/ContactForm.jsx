import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContactsList } from 'redux/contacts/contactsSelectors';
import { avatarStyle } from 'pages/StylePages';
import { createContactsThunk } from 'redux/contacts/thunk';

import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import { LoadAdd } from 'components/Loader/Loader';
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [add, setAdd] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  useEffect(() => {
    setAdd(false);
  }, [contacts]);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    else setNumber(value);
  };

  const onSubmitAddContact = event => {
    event.preventDefault();
    const data = { name, number };
    const newObj = { ...data, id: nanoid() };

    if (isNameNew(contacts, newObj) !== undefined) {
      toast.warning(`${newObj.name} is already in contacts`);
      return;
    }

    dispatch(createContactsThunk(newObj))
      .unwrap()
      .then(originalPromiseResult => {
        toast.success(
          `${originalPromiseResult.name} successfully added to contacts`
        );
      })
      .catch(() => {
        toast.failure("Sorry, something's wrong");
      });
    reset();
  };

  const isNameNew = (contacts, newObj) => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newObj.name.toLowerCase()
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Avatar sx={avatarStyle}>
        <ContactsIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add Contact
      </Typography>
      <Box component="form" onSubmit={onSubmitAddContact} sx={{ mt: 1 }}>
        <TextField
          sx={{ backgroundColor: 'rgba(255, 255, 234, 0.822)' }}
          inputProps={{
            inputMode: 'text',
            pattern: '^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$',
          }}
          margin="normal"
          fullWidth
          label="Name"
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name ..."
          onChange={handleChange}
        />
        <TextField
          sx={{ backgroundColor: 'rgba(255, 255, 234, 0.822)' }}
          inputProps={{
            inputMode: 'tel',
            pattern:
              '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
          }}
          margin="normal"
          fullWidth
          label="Phone number"
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number ..."
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            display: 'flex',
            gap: 3,
          }}
        >
          {add && <LoadAdd />}
          <p>Add contact</p>
        </Button>
      </Box>
    </>
  );
};
