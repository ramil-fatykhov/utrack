import { createStore } from 'redux';
import persistedReducer from './rootReducer';

export const store = createStore(persistedReducer);
export const configurateStore = () => {

  return {
    store,
  };
};
