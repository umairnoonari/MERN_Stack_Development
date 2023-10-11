import { FormControl, useDisclosure, useToast,Input,Box } from '@chakra-ui/react'
import { Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import { ChatState } from '../../Context/ChatProvider'
import axios from 'axios'
import UserListItem from '../UserAvatar/UserListItem'
import UserBadgeItem from '../UserAvatar/UserBadgeItem'
const GroupChatModal = ({children}) => {
    const {isOpen,onOpen,onClose}=useDisclosure()
    const [groupChatName,setGroupChatName]=useState()
    const [selectedUsers,setSelectedUsers]=useState([])
    const [search,setSearch]=useState("")
    const [searchResult,setSearchResult]=useState([])
    const [loading,setLoading]=useState(false)

    const toast=useToast()
    const {user,chats,setChats}=ChatState()
    const handleSearch=async(query)=>{
        setSearch(query)
        if(!query)
        {
            return;
        }
        try {
            setLoading(true)
            const config={
                headers:{
                    'auth-token':user.token
                }
            }

            const {data}=await axios.get(`http://localhost:3001/api/user?search=${search}`,config)
            setLoading(false)
            setSearchResult(data)

        } catch (error) {
            toast({
                title:"Error Occured",
                description:"Failed to Load the Search Results",
                status:"error",
                duration:5000,
                isCloseable:true,
                position:"bottom-left"
              })
            //   return;
        }
    }
    const handleSubmit=()=>{}
    const handleGroup=(userToAdd)=>{
        if(selectedUsers.includes(userToAdd))
        {   
            toast({
                title:"User already added",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"top"
            })
            return;
        }
        setSelectedUsers([...selectedUsers,userToAdd])
    }
    const handleDelete=(delUser)=>{
       setSelectedUsers(selectedUsers.filter(sel=>sel._id!==delUser._id)) 
    }
    return (
    <>
       <span onClick={onOpen}>{children}</span>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader
            fontSize="35px"
            fontFamily="Work sans"
            style={{display:"flex",justifyContent:"center"}}
            >Create Group Chat</ModalHeader>
            <ModalCloseButton />
            <ModalBody
            style={{display:"flex",flexDirection:"column",alignItems:"center"}}
            >
                <FormControl>
                    <Input
                    placeholder='Chat Name' mb={3}
                    onChange={(e)=>setGroupChatName(e.target.value)}

                    />
                </FormControl>
                <FormControl>
                    <Input
                    placeholder='Add User eg: Umair, Tahir, Zubair' mb={1}
                    onChange={(e)=>handleSearch(e.target.value)}
                    />
                </FormControl>
                <Box
                w="100%"
                style={{display:"flex",flexWrap:"wrap"}}
                >
                    {selectedUsers.map(u=>{
                        return <UserBadgeItem key={user._id}
                        user={u}
                        handleFunction={()=>handleDelete(u)}
                        ></UserBadgeItem>
                    })}
                </Box>
                {loading?<div>loading</div>:
                    searchResult?.slice(0,4).map(user=>{
                        return<UserListItem
                        key={user._id}
                        user={user}
                        handleFunction={()=>handleGroup(user)}
                        ></UserListItem>
                        })

                }
            </ModalBody>

            <ModalFooter>
            <Button colorScheme='blue' onClick={handleSubmit}>
                Create Chat
            </Button>
            
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
  )
}

export default GroupChatModal
