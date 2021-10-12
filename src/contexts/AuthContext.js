import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function setPassword(value) {
    setUser({ ...user, password: value });
  }
  function setFirstName(value) {
    setUser({ ...user, firstName: value });
  }
  function setLastName(value) {
    setUser({ ...user, lastName: value });
  }
  function setUsername(value) {
    setUser({ ...user, username: value });
  }
  function setConfirmPassword(value) {
    setUser({ ...user, confirmPassword: value });
  }

  function signUp() {}

  return (
    <AuthContext.Provider
      value={{
        setPassword,
        setFirstName,
        setLastName,
        setUsername,
        setConfirmPassword,
        setShowPassword,
        signUp,
        showPassword,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
