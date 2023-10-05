import React from 'react'
import { useEffect } from 'react'
import {Container,Box,Text,Tab,TabList,TabPanels,TabPanel,Tabs} from '@chakra-ui/react'
import Signup from './Authentication/Signup'
import Login from './Authentication/Login'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('userinfo'))
        if(!user)
        {
            navigate('/')
        }
    },[])
  return (
    <Container maxW="xl" centerContent>
       <Box
       style={{display:"flex",justifyContent:"center"}}
       p={3}
       bg={"white"}
       w="100%"
       m="40px 0 15px 0"
       borderRadius="lg"
       borderWidth="1px"
       >
            <Text fontSize="4xl" fontfamily="Work sans" color="black">Send-Message-Live</Text>
       </Box>
       <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px">
       <Tabs variant='soft-rounded'>
            <TabList mb="1em">
                <Tab width="50%">Login</Tab>
                <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <Login></Login>
                </TabPanel>
                <TabPanel>
                <Signup></Signup>
                </TabPanel>
            </TabPanels>
        </Tabs>
       </Box>
    </Container>
  )
}

export default Home