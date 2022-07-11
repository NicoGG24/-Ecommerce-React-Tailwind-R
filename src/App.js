
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ItemDetailContainer from './Components/Main/ItemDetailContainer';
import ItemListContainer from './Components/Main/ItemListContainer';


function App() {
  return (
    <> 
      <Header />
      <ItemListContainer greeting="Women" />
      <ItemDetailContainer />
      <Footer />
    </>
  );
}

export default App;
