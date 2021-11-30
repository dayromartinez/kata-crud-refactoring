import React from "react";
import { Route } from 'react-router-dom';
import ListView from "./components/list/ListView.js";
import FormView from "./components/list/FormView.js";

function App() {
  return (
  // <StoreProvider>
  //   <div className="title">
  //     <h3>Dashboard</h3>
  //   </div>
  //   <div className="container">
  //     <div className="content">
  //       <FormView />
  //       <ListView />
  //     </div>
  //   </div>
  // </StoreProvider>

  <div>
    <div className="title">
      <h3>ToDo List</h3>
      
    </div>
    <div className="container">
      <div className="content">
        <FormView />
        <ListView />
      </div>
    </div>
  </div>
  )
}

export default App;