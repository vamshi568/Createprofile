// import logo from './logo.svg';
import './App.css';
// import Navbar from './navbar/index'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { Index } from './loginpage';
import { NotFound } from './notfound';
 import {Homepage} from './Homepage'
import { Step1 } from './Homepage/steps/step1';

function App() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/home" element={<Homepage/>} />
      <Route path="/step1" element={<Step1/>} />

      <Route path='/404' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
