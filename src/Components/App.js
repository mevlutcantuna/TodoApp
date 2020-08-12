import React from "react";
import "../Styles/App.css";
import Input from "./Input";
import Body from "./Body";


function App() {
  return (
    <div className="App">
        <h1 className={'title'}>{'Todo APP'}</h1>
        <Input/>
        <Body/>
    </div>
  );
}

export default App;
