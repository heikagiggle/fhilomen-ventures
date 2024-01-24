import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Form, Order } from "./page";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form" element={<Form />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
