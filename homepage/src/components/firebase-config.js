import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAyOzW9bYMjCkpwqxraWtodKdtCBJ-R0K8",
  authDomain: "authentication-9327b.firebaseapp.com",
  projectId: "authentication-9327b",
  storageBucket: "authentication-9327b.appspot.com",
  messagingSenderId: "181772194478",
  appId: "1:181772194478:web:ed837ff7182ac4e977533f",
  measurementId: "G-NMQ1NC7DZD"
};

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);