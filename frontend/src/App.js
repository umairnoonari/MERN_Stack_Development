import Navbar from "./Components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import UserData from "./Components/UserData";
import Home from "./Components/Home";
import Update from "./Components/Update";
import CheckToken from "./Components/CheckToken";
import Notestate from "./Components/Notestate";
import Counter from "./Components/Counter";
import Showme from "./Components/Showme";
import LogicCom from "./Components/LogicCom";
import WrapComp from "./Components/WrapComp";

function App() {
  return (
    <>
    <Notestate>
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
          <Route path="/wrappedcommponent" element={<WrapComp/>}></Route>
          <Route path="/renderprops" element={<Counter render={(count,IncNumber,DecNumber)=>(<Showme count={count} IncNumber={IncNumber} DecNumber={DecNumber}/>)}/>
}></Route>
        </Routes>
     </Router>
     </Notestate>
    </>
  );
}

export default App;
