import React from "react";
import classes from './App.module.css';
import SimpleInput from "./components/SimpleInput";
import BasicForm from "./components/BasicForm";
function App(){
  return(
    <div className={classes.App}>
      <SimpleInput/>
      {/* <BasicForm/> */}
    </div>
  );
};

export default App;