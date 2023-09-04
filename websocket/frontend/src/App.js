import './App.css';
import io from 'socket.io-client'
import {useEffect,useState} from 'react'
const socket=io.connect("http://localhost:3001")
function App() {
  const [data,setData]=useState("")
  const [room,setRoom]=useState("")
  const [recdata,setRecdata]=useState("")
  const sendMessage=()=>{
    socket.emit("send_message",{message:data,room})
  }
  const sendRoom=()=>{
    if(room!="")
      socket.emit("join_room",room)
  }
  useEffect(()=>{
    socket.on("receive_message",(data)=>{
      setRecdata(data.message)
    })
  },[socket])
  return (
    <div className="App">
      <input placeholder='Group' onChange={(e)=>setRoom(e.target.value)}/>
      <button onClick={sendRoom}>Join Room</button>
      <br></br>
      <input placeholder='Message...' onChange={(e)=>setData(e.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message:</h1>
      {recdata}
    </div>
  );
}

export default App;
