import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import Home from "../src/pages/Home";
import CartPage from "./pages/CartPage/CartPage";
function App() {
  return (
    <>
      <MainMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cartpage" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
