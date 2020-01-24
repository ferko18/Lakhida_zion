import { combineReducers } from "redux";
import projectReducer from "./project/projectReducer";
import userReducer from "./user/userReducer";
import contactReducer from './contact/contactReducer'
import blogReducer from './blog/blogReducer'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth", "firebase", "firestore"]
  };

const rootReducer = combineReducers({project:projectReducer, blog:blogReducer, auth:userReducer, contact:contactReducer, firebase: firebaseReducer,
  firestore: firestoreReducer,})

export default persistReducer(persistConfig, rootReducer);