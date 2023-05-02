import Dashboard from './Admin/Dashboard';
// import Login from './Admin/Login';
// import Signup from './Admin/Signup';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';


function App() {


return (
    <div>
      {/* <Dashboard/> */}
      <Navbar/>
      <AllRoutes/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
