import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import CheckToken from './Components/CheckToken';
import Update from './Components/Update';
import UserData from './Components/UserData';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Home from './Components/Home';
import Userstate from './Components/Userstate';
function App() {
  return (
    <>
    <Userstate>
      <Router>
        <Navbar/>
        <Routes>
            <Route element={<CheckToken/>}>
               <Route path="/update/:id" element={<Update/>}/>
               <Route path="/userdata" element={<UserData/>}/>
            </Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
        </Routes>
      </Router>
      </Userstate>
    </>
  );
}

export default App;
