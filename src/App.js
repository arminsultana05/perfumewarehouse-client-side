
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Header/Footer/Footer'
import './App.css';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import Login from '../src/Pages/Login/Login'

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/manage" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
    
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
