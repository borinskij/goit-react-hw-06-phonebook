import { useDispatch, useSelector } from 'react-redux';
import { phoneFilterContact } from '../../redux/Phonebook/sliceFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.filter);
  console.log('filter :', filter);
  const hendlerChange = e => {
    dispatch(phoneFilterContact(e.target.value));
  };

  return (
    <input
      onChange={hendlerChange}
      // value={filter}
      placeholder="filter"
      type="tel"
      name="filter"
    />
  );
};
