
export const BLOG_START = 'BLOG_START';
export const BLOG_SUCCESS = 'BLOG_SUCCESS';
export const BLOG_FAIL = 'BLOG_FAIL';


// Login action creator
const blogActions = (blog) => {
      return  (dispatch, getState, { getFirestore }) => {
          const firestore = getFirestore();
          firestore.collection('blogs').add({
            ...blog,
            title: blog.title,
            body: blog.body,
            }).then(() => {
            dispatch({ type: 'BLOG_SUCCESS' });
          }).catch(err => {
            dispatch({ type: 'BLOG_FAIL' }, err);
          });
        }
        };
        
export default blogActions;
