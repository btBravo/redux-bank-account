// * Original Redux code with Thunk middleware

// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { thunk } from 'redux-thunk';
// import { composeWithDevTools } from '@redux-devtools/extension';

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );


// * Redux Toolkit code 

import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
})

export default store;
