import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDoaZiNPxc8N_X00gNSdjPM6-I2yrSOGwI",
  authDomain: "luxury-e-commerce-website.firebaseapp.com",
  projectId: "luxury-e-commerce-website",
  storageBucket: "luxury-e-commerce-website.firebasestorage.app",
  messagingSenderId: "426090554506",
  appId: "1:426090554506:web:ddb3e6ba39ed7cb42c7973",
  measurementId: "G-MWGT3KWNWG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

