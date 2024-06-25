import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  const [mode, setState] = useState("App light")
  console.log(mode)

//   <button onClick={()=>{
//     mode == "dark" ? setMode("light") : setMode("dark")
// }}>{mode=="dark" ? "Light" : "Dark"} Mode</button>

  //const appClass = mode == "App light" ? "App dark" : "App light"

  return (
    <div className={mode}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=>{
          mode === "App light" ? setState("App dark") : setState("App light")
        }}>{mode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
