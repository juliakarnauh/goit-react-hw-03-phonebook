import PropTypes from 'prop-types'
import { ContactUl, ContactLi, ContactButton} from './ContactList.styled';
export const ContactList= ({contacts, removeContact })=>{
    return (
      <ContactUl>
        {contacts.map(({ id, name, number }) => (
          <ContactLi key={id}>
            {name}: {number}
            <ContactButton type="button" onClick={() => removeContact(id)}>
              Delete
            </ContactButton>
          </ContactLi>
        ))}
      </ContactUl>
    );}

    ContactList.propTypes = {
      contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        })
      ).isRequired,
      removeContact: PropTypes.func.isRequired,
    };