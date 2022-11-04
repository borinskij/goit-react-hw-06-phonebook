import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { phonebookInitialState } from './Phonebook/initial-state.phonebook';
import { phonebookReducer } from './Phonebook/reduser.phonebook';


const enhancer = devToolsEnhancer();
export const store = createStore(
  phonebookReducer,
  phonebookInitialState,
  enhancer
);
