import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginView from "./components/Login/Login";
import ProfileView from "./components/Profile/Profile";
import HomeView from "./components/Home/Home";
import Products from "./components/Products/Products";
import TheHeader from "./components/TheHeader/TheHeader";
import { UserProvider } from "./context/UserContext/UserState";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <Router>
          <TheHeader />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Router>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
