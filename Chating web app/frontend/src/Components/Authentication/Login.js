import React from 'react'
import {VStack,FormControl,FormLabel,Input,InputGroup,InputRightElement,Button} from '@chakra-ui/react'
import {useState} from 'react'
import { useToast } from '@chakra-ui/react'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [show,setShow]=useState(false)
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [loading,setLoading]=useState()
    const toast = useToast()
    const navigate=useNavigate()
    {/* input  Toggle Method*/}
    const handleClick=()=>setShow(!show)
    const Submithandler=async()=>{
    setLoading(true)
    if(!email || !password)
    {
      toast({
        title: 'Please fill all the fields',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position:"bottom"
      })
      setLoading(false)
      return;
    }
    try {
        const data=await axios.post("http://localhost:3001/api/user/login",{email,password},{headers:{
          "Content-type":"application/json"
        }})
        toast({
          title: 'Registration Successful',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position:"bottom"
        })
        localStorage.setItem("userinfo",JSON.stringify(data))
        setLoading(false)
        navigate('/chat')
    } catch (error) {
      toast({
        title: 'Error Occured',
        description:error.response.data.messsage,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position:"bottom"
      })
      setLoading(false)
    }
    }
    return (
      <VStack spacing="5px" color="black">
        {/* input  Email*/}
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </FormControl>
  
        {/* input  Password*/}
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
              <Input type={show?"text":"password"} value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
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
        isLoading={loading}
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
