import * as actions from './actionTypes'
// Login action creator
export const createProject = (project) => {
      return  (dispatch, getState, { getFirestore }) => {
          const firestore = getFirestore();
          firestore.collection('Projects').add({
            ...project,
            projectname: project.projectname,
            projectId: project.projectId,
            company: project.company,
            projectdescription: project.projectdescription,
            projecttype: project.projecttype,
            deliverydate: project.deliverydate,
            buget: project.buget,
            file: project.file
          }).then(() => {
            dispatch({ type: actions.ADD_PROJECT_SUCCESS });
          }).catch(err => {
            dispatch({ type: actions.ADD_PROJECT_FAIL }, err);
          });
        }
        };


export const reteriveProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('Projects').get({
      // ...project,
      projectname: project.projectname,
      projectId: project.projectId,
      company: project.company,
      projectdescription: project.projectdescription,
      projecttype: project.projecttype,
      deliverydate: project.deliverydate,
      buget: project.buget,
      file: project.file
    }).then(() => {
      dispatch({ type: actions.LIST_PROJECT_SUCCESS });
    }).catch(err => {
      dispatch({ type: actions.LIST_PROJECT_FAIL }, err);
    });
  }
};

