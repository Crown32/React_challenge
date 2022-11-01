import {useContext, createContext, useEffect, useState} from 'react';
import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../configs/firebase';
import { AppProps } from '../interfaces/AppProps';
import { User } from '../interfaces/User';

interface AuthContextInterface {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}
const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface );
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({children}:AppProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if(user) {
        setUser({
          uid: user.uid,
          email: user.email ? user.email : '',
          displayName: user.displayName ? user.displayName : '',
          photoUrl: user.photoURL ? user.photoURL : '',
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logout = async () => {
    setUser(null);
    signOut(auth);
  };

  return <AuthContext.Provider value={{signInWithGoogle, logout, user}}>{loading ? null : children}</AuthContext.Provider>;
}