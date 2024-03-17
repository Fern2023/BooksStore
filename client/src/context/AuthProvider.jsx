import { useContext, createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const checkUser = async () => {
    try {
      const response = await axios.get(
        'https://booksstore-10.onrender.com/auth/me',
        // 'localhost:4000/auth/me',
        { withCredentials: true, });

      if (response.data && response.data._id) {
        setIsLoggedIn(true);
        console.log('response.data', response.data);
        setUserData(response.data);
      } else { setIsLoggedIn(false); setUserData({}); }
    } catch (error) { setIsLoggedIn(false); setUserData({}); }
  };

  useEffect(() => { const token = Cookies.get('token'); if (token) { checkUser(); } }, []);

  const value = {
    isLoggedIn,
    userData,
    setIsLoggedIn,
    setUserData,
    checkUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
