import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const persistConfig = {
  key: 'data',
  storage: storage,
  whitelist: [], // which reducer want to store
};
let middleware;
const pReducer = persistReducer(persistConfig, rootReducer);

// if (process.env.NODE_ENV === 'production') {
//   middleware = applyMiddleware(thunkMiddleware);
// } else {
//   middleware = applyMiddleware(thunkMiddleware, logger);
// }

middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, logger),
);

const store = createStore(pReducer, middleware);

const persistor = persistStore(store);

export { persistor, store };

export default store;
