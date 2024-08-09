import { Position, ConcisePosition } from "../types/position";
import { QueryDocumentSnapshot, SnapshotOptions } from "@firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  WithFieldValue,
} from "firebase/firestore";

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
  toFirestore: (value: WithFieldValue<Position>) => value,
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options?: SnapshotOptions
  ) => {
    if (options) {
      return snapshot.data(options) as Position;
    }

    return snapshot.data() as Position;
  },
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize FireStore and get a reference to the service
const db = getFirestore(app);
const collectionRef = collection(db, "openings").withConverter(
  positionConverter
);

export default {
  async getJobPosts(filter?: string): Promise<ConcisePosition[]> {
    const docsRef = await getDocs(collectionRef);
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
  async addPosition(position: Position): Promise<void> {
    const docRef = await addDoc(collectionRef, position);
    console.log(`Document written with ID: ${docRef.id}`);
  },
};
