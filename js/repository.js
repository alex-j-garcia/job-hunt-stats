"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbPcHENs5RWf_ClAOx1E7Tv0Mc17lOu9w",
    authDomain: "job-hunt-stats.firebaseapp.com",
    projectId: "job-hunt-stats",
    storageBucket: "job-hunt-stats.appspot.com",
    messagingSenderId: "467569757257",
    appId: "1:467569757257:web:b9211e737e1806c2870398",
};
// TODO: a function that returns a collection with the proper type cast applied
// Facilitates type conversion when creating or reading from the DB
const positionConverter = {
    toFirestore: (value) => value,
    fromFirestore: (snapshot, options) => {
        if (options) {
            return snapshot.data(options);
        }
        return snapshot.data();
    },
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
// Initialize FireStore and get a reference to the service
const db = (0, firestore_1.getFirestore)(app);
const collectionRef = (0, firestore_1.collection)(db, "openings").withConverter(positionConverter);
exports.default = {
    async getJobPosts(filter) {
        const docsRef = await (0, firestore_1.getDocs)(collectionRef);
        const data = docsRef.docs.map((doc) => doc.data());
        const posts = data.map(({ company_name, position_name }) => ({
            company_name,
            position_name,
        }));
        if (filter) {
            return posts.filter((post) => post.company_name === filter);
        }
        return posts;
    },
    async addPosition(position) {
        const docRef = await (0, firestore_1.addDoc)(collectionRef, position);
        console.log(`Document written with ID: ${docRef.id}`);
    },
};
