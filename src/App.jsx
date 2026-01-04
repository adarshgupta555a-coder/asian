import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./Components/Navbar"
import HomePage from "./Pages/HomePage"
import NotFoundPage from "./Pages/NotFoundPage"
import Shop from "./Components/shop/Shop"
import Cart from "./Components/Cart/Cart"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
