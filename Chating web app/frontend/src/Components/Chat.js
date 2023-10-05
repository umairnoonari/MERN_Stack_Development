import { Box } from "@chakra-ui/react"
import { ChatState } from "../Context/ChatProvider"
import SideDrawer from "./miscellaneous/SideDrawer"
import MyChat from "./MyChat"
import ChatBox from "./ChatBox"
const Chat = () => {
  const {user}=ChatState()
  return (
    <div style={{width:"100%"}}>
      {user&& <SideDrawer/>}
      <Box style={{display:"flex",justifyContent:"space-between"}}
      w="100%"
      h="91.5vh"
      p="10px"
      >
        {user&&<MyChat></MyChat>}
        {user&&<ChatBox></ChatBox>}
      </Box>
    </div>
  )
}

export default Chat
