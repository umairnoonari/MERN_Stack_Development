import React from 'react'
import {Box} from "@chakra-ui/react"
import {ChatState} from '../Context/ChatProvider'
const ChatBox = () => {
  const {selectedChat}=ChatState()
  return (
    <Box
    d={{base:selectedChat?"flex":"none",md:"flex"}}
    alignItems="center"
    flexDir="column"
    p={3}
    bg="white"
    w={{base:"100%",md:"68%"}}
    borderRadius="lg"
    borderWidth="1px"
    >
      {console.log(selectedChat)}
      Single Chat
    </Box>
  )
}

export default ChatBox
