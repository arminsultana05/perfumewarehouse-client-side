
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Header/Footer/Footer'
import './App.css';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import Login from '../src/Pages/Login/Login'
import NotFound from '../src/Pages/NotFound/NotFound'
import Blogs from './Pages/Blogs/Blogs';
import ManageDetails from './Pages/Home/ManageDetails/ManageDetails';
import useProduct from './CustonHooks/useProduct';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

function App() {

  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path ="/inventory/:inventoryId" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/manage" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path ='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
    
      </Routes>
      <Footer></Footer>
     
    </div>

  );
}

export default App;
