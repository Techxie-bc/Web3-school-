import logo from './logo.svg';
import './App.css';
// import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from './components/sidebar';
import Home from './pages';
import Signin from './pages/Signin';



function App() {
  return (
    // <Router>
    //   {/* <Switch> */}
    //     {/* <Route path='/' component={Home} exact /> */}
    //     {/* <Route path='signin' component={Signin} exact /> */}
        
    //   {/* </Switch> */}
    //   <Home />
    //   <Signin />
    // </Router>

    <Router>
      <Routes>
      <Route  path='/' element={<Home />} exact >
      
        </Route>
         <Route  path='/signup' element={<Signin />} exact >
      
        </Route>
        </Routes>
    </Router>


    
      // {/* <Route path='/signup'>
      //   <Signin />
      // </Route> */}

    
  );
}

export default App;
