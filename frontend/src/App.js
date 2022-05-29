import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import Home from "../src/pages/Home";
import CartPage from "./pages/CartPage/CartPage";
import ProductPage from "./pages/ProductPage";
import ShopCollection from "./pages/Shopcollection/ShopCollection";
import ComparePage from "./pages/ComparePage/ComparePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/shopcollection" element={<ShopCollection />} />
          <Route path="/compare" element={<ComparePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
