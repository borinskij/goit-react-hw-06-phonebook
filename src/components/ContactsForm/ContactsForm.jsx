// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phoneSetContactAction } from 'redux/Phonebook/action.phonebook';
import css from './ContactsForm.module.css';
export const Form = () => {
  const dispatch = useDispatch();

  const id = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hendlerChangeName = event => {
    const { value } = event.target;
    setName(value);
  };
  const hendlerChangeNumber = event => {
    const { value } = event.target;
    setNumber(value);
  };

  const handelSubmit = event => {
    event.preventDefault();
    dispatch(phoneSetContactAction({ id, name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handelSubmit}>
      <label>
        Name
        <br />
        <input
          onChange={hendlerChangeName}
          className={css.input}
          type="text"
          name="name"
          value={name}
          placeholder="Name User"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label>
        Number <br />
        <input
          onChange={hendlerChangeNumber}
          className={css.input}
          value={number}
          placeholder="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button className={css.btn}>Додати контакт</button>
      <br />
      <br />
    </form>
  );
};

// Form.propTypes = {
//   hendelSubmit: PropTypes.func.isRequired,
// };
