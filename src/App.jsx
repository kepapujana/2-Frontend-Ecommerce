import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import TheHeader from "./components/TheHeader/TheHeader";
import TheFooter from "./components/TheFooter/TheFooter";
import { UserProvider } from "./context/UserContext/UserState";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Register from "./components/Register/Register";
import Cart from "./components/Cart/Cart";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <OrdersProvider>
          <Router>
            <TheHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <TheFooter />
          </Router>
        </OrdersProvider>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
