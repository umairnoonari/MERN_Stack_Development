import React from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box,Text ,IconButton} from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { getSender,getSenderFull } from '../Config/ChatLogics'
import ProfileModal from './miscellaneous/ProfileModal'
import UpdateGroupChatModal from './miscellaneous/UpdateGroupChatModal'
const SingleChat = ({fetchAgain,setFetchAgain}) => {
  const {user,selectedChat,setSelectedChat}=ChatState()
    return (
    <>
     {selectedChat?<>
        <Text
        fontSize={{base:"28px",md:"30px"}}
        pb={3}
        px={2}
        w="100%"
        fontFamily="Work sans"
        style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}
        >
            {!selectedChat.isGroupChat?
            (<>
            {getSender(user,selectedChat.users)}
            <ProfileModal user={getSenderFull(user,selectedChat.users)}>
            <IconButton
            d={{base:'flex'}}
            icon={<ViewIcon/>}
            ></IconButton>
            </ProfileModal>
            {/* {JSON.stringify(getSenderFull(user,selectedChat.users))} */}
            </>):
            <>
              {selectedChat.chatName.toUpperCase()}
              <UpdateGroupChatModal
              fetchAgain={fetchAgain}
              setFetchAgain={setFetchAgain}
              ></UpdateGroupChatModal>

            </>}
        </Text>
        <Box
        style={{display:"flex",flexDirection:"column",justifyContent:"flex-end"}}
        p={3}
        bg="#E8E8E8"
        w="100%"
        h="90%"
        borderRadius="lg"
        overflowY="hidden"
        >
          Messages Here
        </Box>
     </>:
     <Box style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>
      <Text fontSize="3xl" pb={3} fontFamily="Work sans">
        Click on User to Start Chatting
      </Text>
     </Box>
     } 
    </>
  )
}

export default SingleChat
