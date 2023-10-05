import { Box, Button, Tooltip,Text, Menu, MenuButton, MenuList, Avatar, MenuItem, MenuDivider } from "@chakra-ui/react";
import { useState } from "react";
import {BellIcon,ChevronDownIcon} from "@chakra-ui/icons"
import { ChatState } from "../../Context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";
const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  const navigate=useNavigate()
  const {user}=ChatState()
  const logouthandler=()=>{
    localStorage.removeItem('userinfo');
    navigate("/")
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
           <Button variant="ghost">
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
    </>
  );
};

export default SideDrawer;
