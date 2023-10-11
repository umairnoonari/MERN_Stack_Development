import { Box, Button, Tooltip,Text, Menu, MenuButton, MenuList, Avatar, MenuItem, MenuDivider, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, Input,DrawerBody, useToast, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import {BellIcon,ChevronDownIcon} from "@chakra-ui/icons"
import { ChatState } from "../../Context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";
import {useDisclosure} from '@chakra-ui/hooks'
import axios from "axios";
import ChatLoading from "../ChatLoading";
import UserListItem from "../UserAvatar/UserListItem";
const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate=useNavigate()
  const {user,setSelectedChat,chats,setChats}=ChatState()
  const logouthandler=()=>{
    localStorage.removeItem('userinfo');
    navigate("/")
  }
  const toast=useToast()
  const handleSearch=async()=>{
    if(!search){
      toast({
        title:"Please Enter something in search",
        status:"warning",
        duration:5000,
        isCloseable:true,
        position:"top-left"
      })
      return;
    }
    try {
      setLoading(true)

      const config={
        headers:{
          'auth-token':(user.token),
        }
      }
      const {data}=await axios.get(`http://localhost:3001/api/user?search=${search}`,config) 
      setLoading(false)
      setSearchResult(data)
    } catch (error) {
      toast({
        title:"Failed to Load the Search Results",
        status:"error",
        duration:5000,
        isCloseable:true,
        position:"bottom-left"
      })
      return;
    }
  }
  const accessChat=async(userId)=>{
    try {
      setLoadingChat(true)

      const config={
        headers:{
          'Content-type':"application/json",
          'auth-token':(user.token),
        }
      }
      
      const {data}=await axios.post("http://localhost:3001/api/chat",{userId},config)
      
      if(!chats.find((c)=>c._id===data._id))
      {
         console.log(data)
         setChats([data,...chats])
      }
      setSelectedChat(data)
      setLoadingChat(false)
      onClose()
    } catch (error) {
      toast({
        title:"Error fetching the chat",
        status:"error",
        duration:5000,
        isCloseable:true,
        position:"bottom-left"
      })
      return;
    }
  }
  return (
    <>
      <Box
      style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}
      bg="white"
      w="100%"
      p="5px 10px 5px 10px"
      borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
           <Button variant="ghost" onClick={onOpen}>
            <i class="fas fa-search"></i>
            <Text
            d={{base:"none",md:'flex'}}
            px="4"
            >
              Search User
            </Text>
           </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work sans">
           Send-Message-Live 
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}><BellIcon fontSize="2xl" m={1} ></BellIcon></MenuButton>
            {/* <MenuList></MenuList> */}
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon></ChevronDownIcon>}>
              <Avatar size="sm" cursor="pointer" name={user.name}
              src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem> 
              </ProfileModal>
              <MenuDivider></MenuDivider>
              <MenuItem onClick={logouthandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
      <Drawer
      placement="left"
      onClose={onClose}
      isOpen={isOpen}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box style={{display:"flex"}}
            pb={2}
            >
              <Input
              placeholder="Search by name or email"
              mr={2}
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              ></Input>
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading?<ChatLoading/>:(
              searchResult?.map(user=>{
                return<UserListItem
                key={user._id}
                user={user}
                handleFunction={()=>accessChat(user._id)}
                >
                </UserListItem>
              })
            )}
            {loadingChat&&<Spinner ml="auto" style={{display:"flex"}}/>}
        </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
