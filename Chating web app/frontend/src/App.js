import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Chat from './Components/Chat';
import './App.css'
import ChatProvider from './Context/ChatProvider';
function App() {
  return (
    <div className='App'>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path="/chat" element={<Chat/>}></Route>
            </Routes>
    </div>
  );
}
export default App;
