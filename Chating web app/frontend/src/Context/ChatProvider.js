import {createContext, useContext, useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
const ChatContext=createContext()
const ChatProvider=(props)=>{
    const [user,setUser]=useState()
    const [selectedChat,setSelectedChat]=useState()
    const navigate=useNavigate()
    useEffect(()=>{
        const userInfo=JSON.parse(localStorage.getItem('userinfo'))
        console.log(localStorage.getItem('userinfo'))
        if(userInfo===null)
        {
            navigate('/')
        }
        else
            setUser(userInfo.data)
    },[navigate])
    return <ChatContext.Provider value={{user,setUser,selectedChat,setSelectedChat}}>{props.children}</ChatContext.Provider>
}
export const ChatState=()=>{
    return useContext(ChatContext)
}
export default ChatProvider