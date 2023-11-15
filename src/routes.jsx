import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import { Home } from "./pages/home";
import { Banco } from "./pages/banco";
import { CEP } from "./pages/cep";
import { CNPJ } from "./pages/cnpj";
import { DDD } from "./pages/ddd";

import { Menu } from "./components/Menu";

const RoutesNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/banco" element={<Banco />} />

          <Route exact path="/cep" element={<CEP />} />

          <Route exact path="/cnpj" element={<CNPJ />} />

          <Route exact path="/ddd" element={<DDD />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesNavigation;
