import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
   return (
   <HashRouter>
      <Navigation />
      <Routes>
         <Route path="/" exact={true} element={<Home />} />
         <Route path="/about" exact={true} element={<About />} />
         <Route path="/Movie-detail" exact={true} element={<Detail />} />
      </Routes>
   </HashRouter>
   );
}

export default App;