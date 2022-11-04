import { useDispatch, useSelector } from 'react-redux';
import { phoneDeleteContactAction } from 'redux/Phonebook/action.phonebook';

export const Contacts = () => {
  const dispatch = useDispatch();
  const LOCAL_KEY = 'activ-id';
  const hendelDelete = id => {
    dispatch(phoneDeleteContactAction(id));
  };
  const { contacts } = useSelector(state => state);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  return (
    <ul>
      {contacts?.map(item => (
        <li key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          <button onClick={() => hendelDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
