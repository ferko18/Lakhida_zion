import {
    BLOG_START,
    BLOG_SUCCESS,
    BLOG_FAIL
  } from "./blogActions";
  
  const initialState = {
    blogs: [],
    isSubmitting: false, 
    error: null,
    //loading: false,
  };
  
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case BLOG_START:
        return {
          ...state,
          loading: true,
          isSubmitting: true
        };
      case BLOG_SUCCESS:
        return {
          ...state,
          isSubmitting: false,
          blogs: action.payload, 
          error: null
        };
      case BLOG_FAIL:
          return {
              ...state, error: action.payload
          }
      default:
        return state;
    }
  };
  
  export default blogReducer