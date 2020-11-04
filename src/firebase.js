import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBc7LPnWXtJU4yRbPqdyL4lvThIEdzstKk",
    authDomain: "test-tinder-e2676.firebaseapp.com",
    databaseURL: "https://test-tinder-e2676.firebaseio.com",
    projectId: "test-tinder-e2676",
    storageBucket: "test-tinder-e2676.appspot.com",
    messagingSenderId: "744861253856",
    appId: "1:744861253856:web:624b367394e3ab7019d085",
    measurementId: "G-2EC2GQXB2H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const datebase = firebaseApp.firestore();

export default datebase;