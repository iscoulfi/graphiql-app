import { FirebaseError } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { app } from 'config';

const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (
  email: string,
  password: string,
  t: (text: string) => string
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    switch ((e as FirebaseError).code) {
      case 'auth/wrong-password':
        toast.error(t('Wrong password'));
        break;
      case 'auth/user-not-found':
        toast.error(t('This user does not exist'));
        break;
      default:
        toast.error((e as FirebaseError).code);
    }
  }
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
  t: (text: string) => string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (e) {
    switch ((e as FirebaseError).code) {
      case 'auth/email-already-in-use':
        toast.error(t('This email already exists'));
        break;
      default:
        toast.error((e as FirebaseError).code);
    }
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, logout };
