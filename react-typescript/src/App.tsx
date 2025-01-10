// import Layout from "./Components/Layout.tsx";
import "@mantine/core/styles.css";
import Dashboard from "./Pages/Dashboard.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn.tsx";
import SignUp from "./Pages/SignUp.tsx";
import { useState } from "react";
import { value } from "./Pages/SignIn.tsx";
import { MyContext } from "./Context/MyContext.tsx";
import MyCourses from "./Pages/MyCourses.tsx";

const App: React.FC = () => {
  const [data, setData] = useState<value | null>(null);

  return (
    <>
      {" "}
      <MyContext.Provider value={{ data, setData }}>
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>

            <Route
              path="/"
              element={
                <SignIn
                  values={(values) => {
                    setData(values);
                  }}
                />
              }
            ></Route>

            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/myCourses" element={<MyCourses />}></Route>
          </Routes>
        </Router>
      </MyContext.Provider>
    </>
  );
};

export default App;
