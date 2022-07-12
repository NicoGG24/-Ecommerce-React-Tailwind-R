
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ItemDetailContainer from './Components/Main/ItemDetailContainer';
import ItemListContainer from './Components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidget from './Components/Header/CartWidget';
import ItemDetail from './Components/Main/ItemDetail';


function App() {
  return (
    <> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/Category/:categoryName' element={<ItemListContainer />} />
          <Route path='/Item/:itemId' element={<ItemDetailContainer  />} /> 
          <Route path='/Cart' element={<CartWidget />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
