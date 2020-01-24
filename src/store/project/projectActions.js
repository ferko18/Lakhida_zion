import * as actions from "./actionTypes";
// Login action creator
export const createProject = project => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("Projects")
      .add({
        ...project,
        projectname: project.projectname,
        projectId: project.projectId,
        company: project.company,
        projectdescription: project.projectdescription,
        projecttype: project.projecttype,
        deliverydate: project.deliverydate,
        buget: project.buget,
        file: project.file
      })
      .then(() => {
        dispatch({ type: actions.ADD_PROJECT_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: actions.ADD_PROJECT_FAIL }, err);
      });
  };
};

// export const reteriveProject = (project) => {
//   return (dispatch, getState, { getFirestore }) => {
//     const firestore = getFirestore();
//     firestore.collection('Projects').get({
//       // ...project,
//       projectname: project.projectname,
//       projectId: project.projectId,
//       company: project.company,
//       projectdescription: project.projectdescription,
//       projecttype: project.projecttype,
//       deliverydate: project.deliverydate,
//       buget: project.buget,
//       file: project.file
//     }).then(() => {
//       dispatch({ type: actions.LIST_PROJECT_SUCCESS });
//     }).catch(err => {
//       dispatch({ type: actions.LIST_PROJECT_FAIL }, err);
//     });
//   }
// };
const result = {};
export const reteriveProject = () => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  var firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: actions.LIST_PROJECT_START });
  try {
    // const allData =await firestore.collection("Projects").get()
    // // const res= allData.map(data=>console.log(data))
    // console.log(allData)

    firestore
      .collection("Projects")
      .get()
      .then(function(querySnapshot) {
        const data = querySnapshot.docs.map(
          doc => {
             const { id } = doc;
            return {id, ...doc.data() };
          }
          // doc.data() is never undefined for query doc snapshots
          //  console.log(doc.id, " => ", doc.data());
          // result.push(doc.data());
        );

        console.log(data);
        dispatch({ type: actions.LIST_PROJECT_SUCCESS, payload: data });
      });
  } catch (err) {
    dispatch({ type: actions.LIST_PROJECT_FAIL, payload: err.message });
  }
};

// db.collection('cafes').get().then(snapshot => {
//   snapshot.docs.forEach(doc => {
//       renderCafe(doc);
//   });
// });
// var docRef = db.collection("cities").doc("SF");

// docRef
//   .get()
//   .then(function(doc) {
//     if (doc.exists) {
//       console.log("Document data:", doc.data());
//     } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//     }
//   })
//   .catch(function(error) {
//     console.log("Error getting document:", error);
//   });
