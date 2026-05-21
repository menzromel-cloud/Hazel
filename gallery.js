// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


// YOUR FIREBASE CONFIG
const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain: "YOUR_DOMAIN",

  projectId: "YOUR_PROJECT_ID",

  storageBucket: "YOUR_BUCKET",

  messagingSenderId: "YOUR_SENDER_ID",

  appId: "YOUR_APP_ID"

};


// INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);


// HTML ELEMENTS
const imageUpload = document.getElementById("imageUpload");

const galleryContainer = document.getElementById("galleryContainer");


// IMAGE UPLOAD
imageUpload.addEventListener("change", async function () {

  const files = this.files;

  Array.from(files).forEach(async (file) => {

    const storageRef = ref(storage, `hazel-gallery/${Date.now()}-${file.name}`);

    // Upload Image
    await uploadBytes(storageRef, file);

    // Get Image URL
    const imageURL = await getDownloadURL(storageRef);

    // Create Gallery Card
    const photoCard = document.createElement("div");

    photoCard.classList.add("gallery-item");

    const img = document.createElement("img");

    img.src = imageURL;

    photoCard.appendChild(img);

    galleryContainer.appendChild(photoCard);

  });

});
