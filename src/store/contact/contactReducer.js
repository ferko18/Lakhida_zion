import {
  CONTACT_START,
  CONTACT_SUCCESS,
  CONTACT_FAIL
} from "./contactActions";

const initialState = {
  contacts: [],
  isSubmitting: false, 
  error: null,
  //loading: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_START:
      return {
        ...state,
        loading: true,
        isSubmitting: true
      };
    case CONTACT_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        contacts: action.payload, 
        error: null
      };
    case CONTACT_FAIL:
        return {
            ...state, error: action.payload
        }
    default:
      return state;
  }
};

export default contactReducer