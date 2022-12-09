import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Tour from "./pages/Tour";
import Request from "./pages/request";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tour" element={<Tour />} />
          <Route path="about" element={<About />} />
          <Route path="request" element={<Request />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}