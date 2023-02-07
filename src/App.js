import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { ItemList, ItemDetail, Contact, Nosotros } from './pages'
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<ItemList />} />
        <Route path="/item/:itemDetailId" element={<ItemDetail />} />
        <Route path="/category/:id" element={<Contact />} />
        <Route path="/category/nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
