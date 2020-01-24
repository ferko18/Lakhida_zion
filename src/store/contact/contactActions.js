
export const CONTACT_START = 'CONTACT_START';
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS';
export const CONTACT_FAIL = 'CONTACT_FAIL';


// Login action creator
const customerContact = (contact) => {
      return  (dispatch, getState, { getFirestore }) => {
          const firestore = getFirestore();
          firestore.collection('Contacts').add({
            ...contact,
            email: contact.email,
            name: contact.name,
            company: contact.company,
            message: contact.message
          }).then(() => {
            dispatch({ type: 'CONTACT_SUCCESS' });
          }).catch(err => {
            dispatch({ type: 'CONTACT_FAIL' }, err);
          });
        }
        };
        
export default customerContact;
