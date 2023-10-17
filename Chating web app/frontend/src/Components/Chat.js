import { Box } from "@chakra-ui/react"
import { ChatState } from "../Context/ChatProvider"
import SideDrawer from "./miscellaneous/SideDrawer"
import MyChat from "./MyChat"
import ChatBox from "./ChatBox"
import { useState } from "react"
const Chat = () => {
  const {user}=ChatState()
  const [fetchAgain,setFetchAgain]=useState(false);
  return (
    <div style={{width:"100%"}}>
      {user&& <SideDrawer/>}
      <Box style={{display:"flex",justifyContent:"space-between"}}
      w="100%"
      h="91.5vh"
      p="10px"
      >
        {user&&<MyChat fetchAgain={fetchAgain}></MyChat>}
        {user&&<ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}></ChatBox>}
      </Box>
    </div>
  )
}

export default Chat
