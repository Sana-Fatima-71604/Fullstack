import { createContext } from "react";

const Context = createContext("");

export default Context;

// function Provider({ children }) {
//   const [email, changemail] = useState("null@gmail.com");
//   return (
//     <MyContext.Provider value={{ email, changemail }}>
//       {children}
//     </MyContext.Provider>
//   );
// }

// export { Provider };

