import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Shared/Footer/Footer';
import InventoryDetail from './pages/InventoryDetail/InventoryDetail';
import Login from './pages/Login/LogIn/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import AddNewItem from './pages/AddNewItem/AddNewItem';
import MyItem from './pages/MyItem/MyItem';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/manageinventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/addnewItem" element={<RequireAuth>
          <AddNewItem></AddNewItem>
        </RequireAuth>}></Route>
        <Route path="/myitems" element={<RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>}></Route>
        <Route path='*' element={<Error></Error>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
