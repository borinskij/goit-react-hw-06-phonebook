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
