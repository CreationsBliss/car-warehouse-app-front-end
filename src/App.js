import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Menubar from './Pages/Shared/Menubar';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';

function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/signIn' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
