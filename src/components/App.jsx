import { useSelector } from 'react-redux';

import Contacts from './contactList/ContactList';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';

import style from './app.module.css';

const App = () => {
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.items);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <div className={style.form}>
      <h1>Phonebook</h1>
      <ContactForm />

      <Filter></Filter>
      <Contacts listContact={filterContact()} />
    </div>
  );
};

export default App;
