import React from "react";
import { NavBar, CartWidget, Empanadas, Pizzas, Plato, Postres, Sandwich } from "./components";
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
          <Route path="/category/empanadas" element={<Empanadas />} />
          <Route path="/category/pizzas" element={<Pizzas />} />
          <Route path="/category/plato" element={<Plato />} />
          <Route path="/category/postres" element={<Postres />} />
          <Route path="/category/sandwichs" element={<Sandwich />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;