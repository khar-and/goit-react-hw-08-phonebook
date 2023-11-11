import css from './EmptyContactList.module.css';

export const EmptyContactsList = () => {
  return (
    <div className={css.emptyContactsList}>
      <h1>No Contacts yet</h1>
    </div>
  );
};
