import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Shared/Footer/Footer';
import InventoryDetail from './pages/InventoryDetail/InventoryDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
