import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import MeuContato from "./Paginas/MeuContato";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meucontato" element={<MeuContato />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;