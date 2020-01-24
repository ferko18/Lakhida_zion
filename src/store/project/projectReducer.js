import * as actions from "./actionTypes";


// import * as actions from "./projectActions";
// import { reteriveProject,createProject } from './projectActions'

const initialState = {
  projects: [],
  isSubmitting: false,
  error: null
  // payload: null
  //loading: false,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PROJECT_START:
      return {
        ...state,
        loading: true,
        isSubmitting: true
      };
    case actions.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        projects: actions,
        error: null
      };
    case actions.ADD_PROJECT_FAIL:
      return {
        ...state,
        error: actions
      };

    case actions.LIST_PROJECT_START:
      return {
        ...state,
        loading: true,
        isSubmitting: true
      };
    case actions.LIST_PROJECT_SUCCESS:
            return {
        ...state,
        isSubmitting: false,
        projects: action.payload,
        error: null
        
      };
    case actions.LIST_PROJECT_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default projectReducer;
