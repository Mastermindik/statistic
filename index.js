// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-1b-FihWFEI4qT8QCruRZQlMTBkII1Uw",
  authDomain: "landingstatistic.firebaseapp.com",
  projectId: "landingstatistic",
  storageBucket: "landingstatistic.appspot.com",
  messagingSenderId: "389490878698",
  appId: "1:389490878698:web:9794e79269319b71fd4f93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let arr = [];
let length = 0;
const people = document.getElementById("people")
const start = document.getElementById("start")
const q2 = document.getElementById("q2")
const q3 = document.getElementById("q3")
const check = document.getElementById("check")
const game = document.getElementById("game")
const gameFail = document.getElementById("gameFail")
const gameFail2 = document.getElementById("gameFail2")
const modalFail = document.getElementById("modalFail")
const ModalFail2 = document.getElementById("ModalFail2")
const cart = document.getElementById("cart")
const form = document.getElementById("form")

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function getStat() {
  const querySnapshot = await getDocs(collection(db, "landings"));
  arr = []
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });
  length = arr.length
  people.innerHTML = length
  start.innerHTML = (arr.filter(e => e.leavePage === "Лендінг").length / length * 100).toFixed(2) + "%"
  q2.innerHTML = (arr.filter(e => e.leavePage === "Стартова сторінка").length / length * 100).toFixed(2) + "%"
  q3.innerHTML = (arr.filter(e => e.leavePage === "Питання 2").length / length * 100).toFixed(2) + "%"
  check.innerHTML = (arr.filter(e => e.leavePage === "Перевірка результатів + 1 модальне вікно").length / length * 100).toFixed(2) + "%"
  game.innerHTML = (arr.filter(e => e.leavePage === "Коробки").length / length * 100).toFixed(2) + "%"
  gameFail.innerHTML = (arr.filter(e => e.leavePage === "Коробки після невдалої спроби відкриття").length / length * 100).toFixed(2) + "%"
  gameFail2.innerHTML = (arr.filter(e => e.leavePage === "Коробки після невдалої спроби відкриття 2").length / length * 100).toFixed(2) + "%"
  modalFail.innerHTML = (arr.filter(e => e.leavePage === "Модальне вікно після 1 невдалого відкриття").length / length * 100).toFixed(2) + "%"
  ModalFail2.innerHTML = (arr.filter(e => e.leavePage === "Модальне вікно після 2 невдалого відкриття").length / length * 100).toFixed(2) + "%"
  cart.innerHTML = (arr.filter(e => e.leavePage === "Корзина").length / length * 100).toFixed(2) + "%"
  form.innerHTML = (arr.filter(e => e.leavePage === "Форма відправлена").length / length * 100).toFixed(2) + "%"
}

document.getElementById("button").addEventListener("click", getStat);
