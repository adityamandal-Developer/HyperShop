import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/keyboard"
            element={<ShopCategory category="keyboard" />}
          />
          <Route
            path="/graphicCard"
            element={<ShopCategory category="graphicCard" />}
          />
          <Route path="/mouse" element={<ShopCategory category="mouse" />} />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/login" element={<LoginSignup />} />
          {/* for future authentication */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
