import {createStore, applyMiddleware} from 'redux';
import {userSlice} from './userSlice/userSlice';

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = createStore(
  userSlice.reducer,
  {name: '', repository: ''},
  applyMiddleware(...middlewares),
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
