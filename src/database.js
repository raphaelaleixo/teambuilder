var firebase = require('firebase/app');
require('firebase/database');
const config = {
  apiKey: "AIzaSyBCcy8ZOsHkp60gwcd9oFNwyXjWnGaBYCw",
  authDomain: "teambuilder-830af.firebaseapp.com",
  databaseURL: "https://teambuilder-830af.firebaseio.com",
  projectId: "teambuilder-830af",
  storageBucket: "teambuilder-830af.appspot.com",
  messagingSenderId: "986677298906",
  appId: "1:986677298906:web:46a9bbf728815aec"
};
firebase.initializeApp(config);

export default firebase.database();
