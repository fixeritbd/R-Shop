import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import Home from "../src/pages/Home";
import CartPage from "./pages/CartPage/CartPage";
import ShopCollection from "./pages/Shopcollection/ShopCollection";
import ComparePage from "./pages/ComparePage/ComparePage";
import ProductDeatils from "./components/ProductDeatils/ProductDeatils";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/productdeatils" element={<ProductDeatils />} />
          <Route path="/shopcollection" element={<ShopCollection />} />
          <Route path="/compare" element={<ComparePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
