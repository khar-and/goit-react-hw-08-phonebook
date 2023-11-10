import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet, selectContactsFilter } from 'redux/filters/slice';
import { Avatar, TextField, Box } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { avatarStyle } from 'pages/StylePages';
import css from './Filter.module.css';
export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectContactsFilter);

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <Box component="div" className={css.boxFilterStyle}>
      <Avatar sx={avatarStyle}>
        <PersonSearchIcon />
      </Avatar>
      <TextField
        margin="normal"
        inputProps={{
          inputMode: 'text',
          pattern: '^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$',
        }}
        sx={{
          width: 324,
          bgcolor: 'rgba(255, 255, 234, 0.822)',
        }}
        label="Find contacts by name:"
        type="text"
        name="filter"
        value={filter}
        title="Enter the name"
        onChange={onChangeFilter}
      />
    </Box>
  );
};
//       <label className={css.label}>
//         Find contacts by name:
//         <input
//           className={css.input}
//           name="filter"
//           type="text"
//           value={filter}
//           onChange={onChangeFilter}
//         />
//       </label>
//     </div>
//   );
// };
