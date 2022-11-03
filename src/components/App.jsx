// import { useEffect, useState } from 'react';
import { Section } from './Section/Section.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
// import { nanoid } from 'nanoid';
import { Form } from './ContactsForm/ContactsForm.jsx';
import { Filter } from './Filter/Filter.jsx';

// const LOCAL_KEY = 'activ-id';

export const App = () => {
  return (
    <>
      <Section title={'Phonebook'}>
        <Form /*hendelSubmit={hendelSubmit} */ />
      </Section>
      <Section title={'Filter'}>
        <Filter /*stateFilter={filter} hendlerChange={hendlerChange}*/ />
      </Section>

      <Section title={'Contacts'}>
        <Contacts /*contacts={filterMap()} hendelDelete={hendelDelete}*/ />
      </Section>
    </>
  );
};
