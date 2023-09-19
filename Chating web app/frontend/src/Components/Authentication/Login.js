import React from 'react'
import {VStack,FormControl,FormLabel,Input,InputGroup,InputRightElement,Button} from '@chakra-ui/react'
import {useState} from 'react'
const Login = () => {
    const [show,setShow]=useState(false)
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
  
    {/* input  Toggle Method*/}
    const handleClick=()=>setShow(!show)
    const Submithandler=()=>{}
    return (
      <VStack spacing="5px" color="black">
        {/* input  Email*/}
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}/>
        </FormControl>
  
        {/* input  Password*/}
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
              <Input type={show?"text":"password"} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
              <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show?"Hide":"Show"}
              </Button>
          </InputRightElement>
          </InputGroup>
        </FormControl>
  
        {/* Button Sign up */}
        <Button
        colorScheme="blue"
        width="100%"
        style={{marginTop:15}}
        onClick={Submithandler}
        >
          Login
        </Button>

        {/* Button Guest User */}
        <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        style={{marginTop:15}}
        onClick={()=>{
            setEmail("guest@example.com")
            setPassword("123456")
        }
        }
        >
          Get Guest User Credentials
        </Button>
      </VStack>
    )
}

export default Login
