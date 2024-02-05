import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddUSer from './Components/AddUSer';
import EditPage from './Components/EditPage';
import AddProd from './Components/AddProd';

function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AddUser' element={<AddProd/>}/>
      <Route path='/EditPage/:id' element={<EditPage/>}/>
     </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
