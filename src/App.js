import React from "react";
import { NavBar, Cart, Empanadas, Pizzas, Plato, Postres, Sandwich } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { ItemListContainer, ItemDetailContainer } from "./pages";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/shoppingcart" element={<Cart />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/category/empanadas" element={<Empanadas />} />
          <Route path="/category/pizzas" element={<Pizzas />} />
          <Route path="/category/plato" element={<Plato />} />
          <Route path="/category/postres" element={<Postres />} />
          <Route path="/category/sandwichs" element={<Sandwich />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;