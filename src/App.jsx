import './App.css'
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
  <div>
    <Navbar />
    <ItemListContainer greeting={"THE SHOP"} />
  </div>
  );
}

export default App;
