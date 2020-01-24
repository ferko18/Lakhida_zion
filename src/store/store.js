// import { createStore, applyMiddleware } from 'redux';
// import { persistStore } from 'redux-persist';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk'
// import rootReducer from './root-reducer';

// //redux dev tool 
// import { composeWithDevTools } from 'redux-devtools-extension';



// const middlewares = [thunk];

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));


// export const persistor = persistStore(store);

// export default { store, persistStore };
import { persistStore } from 'redux-persist';

import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from '../firebase/firebase.utils';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import rootReducer from './root-reducer';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true, // attaches auth is ready promise to store
};

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

    const store = createStore(rootReducer,composeEnhancers( reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

export const persistor = persistStore(store);

export { store, persistStore };