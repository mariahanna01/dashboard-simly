import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './Components/SideBar/SideBar';
import Dashboard from './Components/Dashboard/Dashboard';
import Analytics from './Components/Analytics/Analytics'
import Orders from './Components/Orders/Orders';
import NewEsim from './Components/NewEsim/NewEsim';
import Settings from './Components/Settings/Settings'
function App() {
  return (
    <Router>
       <div className="App">
         <SideBar/>
         
     <Routes>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/analytics' element={<Analytics/>}/>
     <Route path='/orders' element={<Orders/>}/>
     <Route path='/newEsim' element={<NewEsim/>}/>
     <Route path='/settings' element={<Settings/>}/>
     </Routes>
     </div>
    </Router>
   
  );
}

export default App;
