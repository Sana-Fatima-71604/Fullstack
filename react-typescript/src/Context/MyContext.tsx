import React from "react";
import { value } from "../Pages/SignIn";

interface contextInterface {
  data: value | null;
  setData?: (data: value) => void;
}

const defaultContext = {
  data: null,
  setData: () => {},
};

export const MyContext = React.createContext<contextInterface>(defaultContext);
