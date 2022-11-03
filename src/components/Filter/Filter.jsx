import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { phoneFilterContactAction } from 'redux/Phonebook/action.phonebook';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const hendlerChange = e => {
    setFilter(e.target.value);
    dispatch(phoneFilterContactAction(filter.toLowerCase()));
  };

  return (
    <input
      onChange={hendlerChange}
      value={filter}
      placeholder="filter"
      type="tel"
      name="filter"
    />
  );
};
