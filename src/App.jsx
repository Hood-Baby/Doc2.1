import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home'; 
import About from './pages/About';
import Doctors from './pages/Doctors'; 
import Login from './pages/Login'; 
import Contact from './pages/Contact'; 
import Myprofile from './pages/Myprofile';
import MyAppointments from './pages/MyAppointments';
import Appointments from './pages/Appointments';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <Navbar/>

          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/doctors' element={<Doctors/>} />
              <Route path='/doctors/:speciality' element={<Doctors />} />
              <Route path='/about' element={<About/>}/>
              <Route path='/login' element={< Login/>}/>
              <Route path='/contact' element={< Contact />}/>
              <Route path='/my-profile' element={< Myprofile />}/>
              <Route path='/my-appointments' element={< MyAppointments/>} />
              <Route path='/appointment/:docId' element={< Appointments/>} /> {/* Ensure this path is correct */}
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
