import React from "react";
import { NavBar, CartWidget } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { ItemListContainer, ItemDetailContainer } from "./pages";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;