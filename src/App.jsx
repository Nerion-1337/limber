// COMPONENTS
import Sidebar from "./components/sidebar";
// DATA
import { Route_Client } from "#data/links";
import 'bootstrap/dist/css/bootstrap.min.css';
// REACT
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <section className="body d-flex">
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
