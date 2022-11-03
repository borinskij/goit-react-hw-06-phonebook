// import { phonebookInitialState } from './initial-state.phonebook';

export const phonebookReducer = (state, action) => {
  switch (action.type) {
    case 'phonebook/phoneSetContact':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'phonebook/phoneDeleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };
    case 'phonebook/phoneFilterContact':
      return {
        filter: action.payload,
        contacts: state.contacts.filter(element =>
          element.name.toLowerCase().includes(action.payload)
        ),
      };

    default:
      return state;
  }
};
