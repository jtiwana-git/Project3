import { createContext, use, useEffect, useState } from "react";
import axios from "axios";
import { getResponseError } from "../../utils/error";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const { error, setError } = useState(false);

  const login = async (inputs) => {
    console.log(inputs);
    const res = await axios.post("http:localhost:3001/api/auth/login", inputs);
    await setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
