import logo from './logo.svg';
import './App.css';
import './caviar.css';
import './louis.css';
import './valeria.css';
import './newyork.css';



import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import LayoutPage from './pages/layout_page';
import HomePage from './pages/home_page';
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutPage from './pages/about_page';
import VisionPage from './pages/vision_page';
import MissionPage from './pages/mission_page';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LayoutPage/>}>
      <Route path='/' index element={<HomePage/>}/>
      <Route path='/about' index element={<AboutPage/>}/>
      <Route path='/vision' index element={<VisionPage/>}/>
      <Route path='/mission' index element={<MissionPage/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
