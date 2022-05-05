
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
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import SignUp from '../src/Pages/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddProduct from './Pages/AddProduct/AddProduct';
import DeletwProduct from './Pages/DeleteProduct/DeletwProduct';
import Order from './Pages/Order/Order';
import Orders from './Pages/Order/Orders/Orders';

function App() {

  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path ="/inventory/:inventoryId" element={<RequireAuth>
          <ProductDetail></ProductDetail>
        </RequireAuth>}></Route>
        <Route path="/manage" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/additem" element={<AddProduct></AddProduct>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/deleteitem" element={<DeletwProduct></DeletwProduct>}></Route>
        <Route path='/order/:orderId' element={<Order></Order>}></Route>
        <Route path ='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='signup'element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
    
      </Routes>
      <Footer></Footer>
     
    </div>

  );
}

export default App;
