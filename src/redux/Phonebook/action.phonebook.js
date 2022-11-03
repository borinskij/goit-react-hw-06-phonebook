export const phoneSetContactAction = payload => {
  console.log('payloadJS :', payload);
  return { type: 'phonebook/phoneSetContact', payload };
};
export const phoneDeleteContactAction = payload => {
  return { type: 'phonebook/phoneDeleteContact', payload };
};
export const phoneFilterContactAction = payload => {
  return { type: 'phonebook/phoneFilterContact', payload };
};

// const [contacts, setContacts] = useState(() => {
//   const data = localStorage.getItem(LOCAL_KEY);
//   if (data) {
//     return JSON.parse(data);
//   }
//   return [];
// });

// const [filter, setFilter] = useState('');

// useEffect(() => {
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
// }, [contacts]);

// function hendlerChange(event) {
//   setFilter(event.target.value);
// }

// function hendelSubmit(name, number) {
//   const id = nanoid();
//   if (contacts.some(item => item.name === name)) {
//     return alert(`${name} is already in contacts`);
//   }
//   setContacts(prevContacts => [...prevContacts, { id, name, number }]);
// }

// function hendelDelete(id) {
//   setContacts(contacts.filter(item => item.id !== id));
// }

// function filterMap() {
//   const result = contacts.filter(element =>
//     element.name.toLowerCase().includes(filter.toLowerCase())
//   );
//   return result;
// }
