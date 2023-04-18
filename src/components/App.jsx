import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import contacts from './contact.json';

const CONTACTS_KEY = 'contacts_key';
export class App extends Component {
  state = {
    contacts,
    filter: '',
  };
  componentDidMount() {
    const contactsFromLS = localStorage.getItem(CONTACTS_KEY);
    if(JSON.parse(contactsFromLS)?.length){
    this.setState({ contacts: JSON.parse(contactsFromLS) });}
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts){
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
  }}
  addContact = data => {
    const { contacts } = this.state;
    const duplicate = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (duplicate) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    this.setState(prevState => {
      const { contacts } = prevState;
      const { name, number } = data;
      const newContact = {
        name,
        number,
        id: nanoid(),
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(item => item.id !== id),
      };
    });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const filterValue = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filterValue);
    });
    return filteredContacts;
  }

  handleFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  render() {
    const { handleFilter, removeContact, addContact } = this;
    const contacts = this.getFilteredContacts();
    return (
      <>
        <ContactForm onSubmit={addContact} />
        <Filter handleFilter={handleFilter} />
        <ContactList contacts={contacts} removeContact={removeContact} />
      </>
    );
  }
}
