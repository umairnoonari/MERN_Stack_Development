import Navbar from "./Components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import UserData from "./Components/UserData";
import Home from "./Components/Home";
import Update from "./Components/Update";
import CheckToken from "./Components/CheckToken";

function App() {
  return (
    <>
     <Router>
        <Navbar/>
        <Routes>
          <Route element={<CheckToken/>}>
            <Route path="/userdata" element={<UserData/>}/>
            <Route path="/update/:id" element={<Update/>}/>
          </Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
     </Router>
    </>
  );
}

export default App;
