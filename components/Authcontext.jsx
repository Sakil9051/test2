import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

function AppContextProviderComponent({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userdata, setuserdata] = useState();
  

  const logoutUser = () => {
    setuserdata("");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth,setIsAuth, logoutUser,userdata, setuserdata }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AppContextProviderComponent;
