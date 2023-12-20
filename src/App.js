import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NavBarHome from './Composants/NavBar/Navbar';
import Home from './Composants/Pages/Home';
import Women from './Composants/Category/women/womenproduct';
import {Shop} from './Composants/Pages/Men/shop';
import Kids from './Composants/Category/kids/kidsproduct';
import {Cart} from './Composants/Pages/Cart/cart';
import LoginSignup from './Composants/Pages/Auth/LoginSignUp';
import { ShopContextProvider } from './Composants/context/shop-context';

function App() {
  return (
    <div className="App">
  <ShopContextProvider>
  
  <NavBarHome/>
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/womens' element={<Women/>}></Route>
  <Route path='/mens' element={<Shop/>}></Route>
  <Route path='/kids' element={<Kids/>}></Route>
  <Route path='/LoginSignUp' element={<LoginSignup/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  </Routes>
 
   </ShopContextProvider>
    </div>
  );
}

export default App;
