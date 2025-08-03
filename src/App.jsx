// COMPONENTS
import Sidebar from "./components/sidebar";
// DATA
import { Route_Client } from "#data/links";
// REACT
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
//
//
//
//
//
function App() {
  //
  //
  // BUILDER
  //
  //
  ///
  const routeContent = Route_Client.map((item, index) => (
    <Route path={item.url} element={item.page} key={index} />
  ));
  ///
  const content = (
    <>
      <section className="body">
        <BrowserRouter>
          <Sidebar />
          <Routes>{routeContent}</Routes>
        </BrowserRouter>
      </section>
    </>
  );
  //
  //
  // RETURN
  //
  //
  return content;
}

export default App;
