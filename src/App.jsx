import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./Components/Navbar"
import HomePage from "./Pages/HomePage"
import NotFoundPage from "./Pages/NotFoundPage"
import Shop from "./Pages/Shop"
import Cart from "./Components/Cart/Cart"
import Register from "./Pages/User/Register"
import Login from "./Pages/User/Login"
import CartPage from "./Pages/CartPage"
import ProductPage from "./Pages/ProductPage"
import Checkout from "./Pages/Checkout"
function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product-page/:id" element={<ProductPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
