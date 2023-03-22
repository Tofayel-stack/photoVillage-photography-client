
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8wbEgd6lzXOUkcdXCWCyrCw2iJkaEWUo",
  authDomain: "photo-village.firebaseapp.com",
  projectId: "photo-village",
  storageBucket: "photo-village.appspot.com",
  messagingSenderId: "914905814506",
  appId: "1:914905814506:web:cfac99f97a0581f0f38e93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;