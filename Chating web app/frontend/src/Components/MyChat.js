import { useEffect, useState } from "react"
import { ChatState } from "../Context/ChatProvider"
import { useToast,Box, Button,Stack,Text } from "@chakra-ui/react"
import axios from "axios"
import { AddIcon } from "@chakra-ui/icons"
import ChatLoading from "./ChatLoading"
import { getSender } from "../Config/ChatLogics"
const MyChat = () => {
  const [loggedUser,setLoggedUser]=useState()
  const {selectedChat,setSelectedChat,user,chats,setChats}=ChatState()
  const toast=useToast()

  const fetchChats=async()=>{
    console.log(user.token)
    try {
      const config={
        headers:{
          'auth-token':(user.token)
        }
      }
      const {data}=await axios.get('http://localhost:3001/api/chat/',config)
      console.log(data)
      setChats(data)
    } catch (error) {
      toast({
        title:"Error Occured",
        description:"Failed to Load the chats",
        status:"error",
        duration:5000,
        isCloseable:true,
        position:"bottom-left"
      })
      return;
    }
  }
  useEffect(()=>{
    setLoggedUser(JSON.parse(localStorage.getItem("userinfo")))
    fetchChats()
  },[])
  return (
    <Box
    style={{display:selectedChat?"none":"flex",flexDirection:"column",alignItems:"center"}}
    d={{md:"flex"}}
    p={3}
    bg="white"
    w={{base:"100%",md:"31%"}}
    borderRadius="lg"
    borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{base:"28px",md:"38px"}}
        fontFamily="Work sans"
        w="100%"
        style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}
      >
        MYChats
        <Button
         style={{display:"flex"}}
         fontSize={{base:"17px",md:"10px",lg:"17px"}}
         rightIcon={<AddIcon/>}
        >
          New Group Chat
        </Button>
      </Box>
      <Box
      style={{display:"flex",flexDirection:"column"}}
      p={3}
      bg="#F8F8F8"
      w="100%"
      h="100%"
      borderRadius="lg"
      overflowY="hidden"
      >
        {chats?(
          <Stack overflowY="scroll">
            {chats.map((chat)=>(
              <Box onClick={()=>setSelectedChat(chat)}
              cursor="pointer"
              bg={selectedChat===chat?"#38B2AC":"#E8E8E8"}
              color={selectedChat===chat?"white":"black"}
              px={3}
              py={2}
              borderRadius="lg"
              key={chat._id}
              >
               <Text>
                {!chat.isGroupChat?(
                  getSender(loggedUser,chat.users)
                ):chat.chatName}
                </Text> 
              </Box>
            ))}
          </Stack>
        ):<ChatLoading/>}
      </Box>
    </Box>
  )
}
 
export default MyChat
