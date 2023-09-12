import { NavigationBar } from "./components/navBar.js";
import { ProductPage } from "./pages/products.js";
import { AuthUser } from "./pages/auth.js";
import { AddProduct } from "./pages/addProducts.js"
import { CategorySlider } from "./components/categorySlider.js";
import { CategoryPage } from "./components/categoryPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home.js";
import { CategoryIphone } from "./pages/iphone.js";
import { CategorySamsung } from "./pages/samsung.js";
import { CategoryBoat } from "./pages/boat.js"
import { CartPage } from "./pages/cart.js";
import { SingleProductPage } from "./pages/productPage.js";


function App() {
  return (
    <div className=" bg-slate-200 ">
      <Router>
        <NavigationBar />
        
        <Routes>


        <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthUser />} />
          <Route path="/category-iphone" element={<CategoryIphone />} />
          <Route path="/category-samsung" element={<CategorySamsung />} />
          <Route path="/category-boat" element={<CategoryBoat />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/products" element={ <ProductPage/> } />
          <Route path="/cart" element={ <CartPage /> } />
          <Route path="/product-detail/:title" element={<SingleProductPage />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
