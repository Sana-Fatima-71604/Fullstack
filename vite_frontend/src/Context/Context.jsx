import { createContext } from "react";

const Context = createContext("");

// function Provider({ children }) {
//   const [email, changemail] = useState("null@gmail.com");
//   return (
//     <MyContext.Provider value={{ email, changemail }}>
//       {children}
//     </MyContext.Provider>
//   );
// }

// export { Provider };
export default Context;
