import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContactsList } from 'redux/contacts/contactsSelectors';
import { deleteContactsThunk, getContactsThunk } from 'redux/contacts/thunk';
import { selectContactsFilter } from 'redux/filters/slice';
import { SpinerDel } from 'components/Loader/Loader';
import css from './ContactList.module.css';
import {
  Box,
  List,
  Typography,
  Avatar,
  ListItem,
  IconButton,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DeleteIcon from '@mui/icons-material/Delete';
import { avatarStyle } from 'pages/StylePages';

export const ContactList = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(false);
  }, []);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);

  const visibleContacts = contacts.filter(({ name }) =>
    name?.toLowerCase().includes(filter)
  );

  const deleteContact = contactId => {
    dispatch(deleteContactsThunk(contactId))
      .unwrap()
      .then(originalPromiseResult => {
        toast.success(
          `${originalPromiseResult.name} successfully deleted from contacts`
        );
      })
      .catch(() => {
        toast.failure("Sorry, something's wrong");
      });
  };
  return (
    <Box className={css.boxListStyle}>
      <Avatar sx={avatarStyle}>
        <ImportContactsIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Your Contacts
      </Typography>
      <List sx={{ width: 396 }}>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <ListItem
              key={id}
              className={css.listItemStyle}
              secondaryAction={
                <IconButton
                  onClick={() => deleteContact(id)}
                  aria-label="delete"
                >
                  {load ? <SpinerDel /> : <DeleteIcon />}
                </IconButton>
              }
            >
              <ListItemButton>
                <ListItemText>
                  {name}: {number}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
