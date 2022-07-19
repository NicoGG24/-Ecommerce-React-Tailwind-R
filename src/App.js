
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ItemDetailContainer from './Components/Main/ItemDetailContainer';
import ItemListContainer from './Components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./Components/Context/CartContext";
import Cart from './Components/Cart';


function App() {
  return (
    <> 
      <BrowserRouter>
        <CartContext>
          <Header />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/Category/:categoryName' element={<ItemListContainer />} />
            <Route path='/Item/:itemId' element={<ItemDetailContainer  />} /> 
            <Route path='/Cart' element={<Cart />}/>
          </Routes>
          <Footer />
        </CartContext>
      </BrowserRouter>
    </>
  );
}

export default App;
