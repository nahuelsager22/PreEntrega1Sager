import React from "react";
import { NavBar } from "./components";
import { ItemListContainer } from "./components";
import './styles/App.css'
function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"BIENVENIDOS"} />
    </>
  );
}

export default App;
