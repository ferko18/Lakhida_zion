import * as actions from './actionTypes'

// import * as actions from "./projectActions";
// import { reteriveProject,createProject } from './projectActions'
  
  const initialState = {
    projects: [
      {id: '1', projectname: 'Project1', projectId: 1001, company: "ABC",  projectdescription: 'blah blah blah'},
      {id: '2', projectname: 'Project2', projectId: 1002, company: "ABCD", projectdescription: 'blah blah blah'},
      {id: '3', projectname: 'Project3', projectId: 1003, company: "ABCDE", projectdescription: 'blah blah blah'}
    ],
    isSubmitting: false, 
    error: null
    // payload: null
    //loading: false,
  };
    
  
  const projectReducer = (state = initialState,  { type  }) => {
    switch (type) {
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
              ...state, error: actions
          }

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
          projects: actions,
          error: null
        };
      case actions.LIST_PROJECT_FAIL:
        return {
          ...state, error: actions
        }

      default:
        return state;
    }
  };
  
  export default projectReducer
