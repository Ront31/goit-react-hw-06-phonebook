import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact } from 'redux/contactsSlice';
import { getContacts, getFilter, getFilteredContacts } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = useSelector(getFilteredContacts);

  const formSubmitHandler = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in list`);
      return;
    }

    const action = addContact({ name, number });
    dispatch(action);
  };

  const handleFilterChange = event => {
    const action = setFilter(event.target.value.toLowerCase().trim());
    dispatch(action);
  };

  const deleteContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm formSubmitHandler={formSubmitHandler}></ContactForm>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange}></Filter>
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
      ></ContactList>
    </div>
  );
};
