import firebase from '../firebase';
import { Dispatch } from 'react';

export const firebaseLogOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => console.log('error'));
};

export const firebaseCreateUser = (email: string, password: string) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

//　作ろうと思ったけどuserがいるのでやめた
// export const firebaseLogin = (
//   setUser: (user: firebase.User) => void,
//   clearUser: () => void,
//   navigation: any,
//   dispatch: Dispatch<any>,
//   AfterLoginPage: string,
//   LoginPage: string
// ) => {
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       dispatch(setUser(user));
//       navigation.navigate(AfterLoginPage);
//     } else {
//       dispatch(clearUser());
//       navigation.navigate(LoginPage);
//     }
//   });
// };
