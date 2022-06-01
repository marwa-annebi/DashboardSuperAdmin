// import { useState, createContext, Children, useContext } from "react";
// const AuthContext = createContext(null);
// export const AuthProvider = ({ Children }) => {
//   const [user, setUser] = useState(null);
//   const login = (user) => {
//     setUser(user);
//   };
//   const logout = () => {
//     setUser(null);
//   };
//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {Children}
//     </AuthContext.Provider>
//   );
// };
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
export const isLogin = () => {
 let token = JSON.parse(localStorage.getItem("adminInfo"));
  if (localStorage.getItem(token.token)) {
    return true;
  }

  return false;
};
