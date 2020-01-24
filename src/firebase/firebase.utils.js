import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firestoreConnect } from "react-redux-firebase";
// import  firebase from 'firebase'


//config object from firebase console
const Config = {
  apiKey: "AIzaSyD-vzwU5MBcqvK8eIy-fveuqrhFAiKmG-c",
    authDomain: "lakhida-f6d70.firebaseapp.com",
    databaseURL: "https://lakhida-f6d70.firebaseio.com",
    projectId: "lakhida-f6d70",
    storageBucket: "lakhida-f6d70.appspot.com",
    messagingSenderId: "637393735412",
    appId: "1:637393735412:web:b3ef5f0c943097c90398a1",
    measurementId: "G-9QGNXF6C05"
};
// Initialize Firebase
firebase.initializeApp(Config);
//   firebase.analytics();

// export const database = firebase.ref('/blogs');

export const reteriveProjectList =  firestoreConnect([
  {collection: 'Projects'}

])


export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get(); //get() is async

  if (!snapShot.exists) {
    //if user doc not existed yet in our database
    const { displayName, email } = userAuth;
    const createAt = new Date();
    
    
    try {
      //create user doc and store it into our database
      await userRef.set({
        displayName,
        email,
        createAt,
      
      });
      await firestore
      .collection('users')
      .doc(userAuth.uid)
      .set({
        firstName: otherData.firstName,
        lastName: otherData.lastName,
      });
      
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  //console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  //console.log(transformedCollection);
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
