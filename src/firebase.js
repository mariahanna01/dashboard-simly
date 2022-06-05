import { initializeApp } from "firebase/app";
import { getFirestore,initializeFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAuXaIrivgA1m0b_RqM7XXry_S_SegYWSY",
  authDomain: "simly-dedfe.firebaseapp.com",
  projectId: "simly-dedfe",
  storageBucket: "simly-dedfe.appspot.com",
  messagingSenderId: "312948262281",
  appId: "1:312948262281:web:883f66fd6a21418392cd58",
  measurementId: "G-0MXDBR3Z56"
};
  const app = initializeApp(firebaseConfig);
  export const db = initializeFirestore(app, {useFetchStreams: false});