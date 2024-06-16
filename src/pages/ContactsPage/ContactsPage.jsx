import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.subtitle}>Contacts</h2>
      <div className={css.wrapper}>
        <SearchBox />
        {isLoading && <p className={css.message}>Loading...</p>}
        {isError && (
          <p className={css.error}>
            Something went wrong! Please try reloading the page.
          </p>
        )}
        <ContactList />
      </div>
    </div>
  );
}
