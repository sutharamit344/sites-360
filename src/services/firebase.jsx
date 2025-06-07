import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";s
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZvOaDNBvPAxyv-_PZlHIrpoLXCpzekBM",
  authDomain: "sites-360.firebaseapp.com",
  projectId: "sites-360",
  storageBucket: "sites-360.firebasestorage.app",
  messagingSenderId: "347658239054",
  appId: "1:347658239054:web:da245a6201cfad67bf171f",
  measurementId: "G-J2ZB5EF8D3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);