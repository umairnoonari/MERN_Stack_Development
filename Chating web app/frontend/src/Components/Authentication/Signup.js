import React, { useState } from 'react'
import {VStack,FormControl,FormLabel,Input,InputGroup,InputRightElement,Button} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Signup = () => {
  const [show,setShow]=useState(false)
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [confirmpassword,setConfirmpassword]=useState()
  const [pic,setPic]=useState()
  const [loading,setLoading]=useState(false)
  const toast = useToast()
  const navigate=useNavigate()
  {/* input  Toggle Method*/}
  const handleClick=()=>setShow(!show)
  const postDetails=async(pic)=>{
    setLoading(true)
    if(pic===undefined)
    {
      toast({
        title: 'Please Select an Image',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
      return;
    }
    console.log(pic)
    if(pic.type==="image/jpeg"||pic.type==="image/png")
    {
      const data=new FormData()
      data.append("file",pic)
      data.append("upload_preset","web-chat-app")
      data.append("cloud_name","dvugegf5e")
      await fetch("https://api.cloudinary.com/v1_1/dvugegf5e/image/upload",{
        method:"post",
        body:data
      }).then(res=>res.json()).then(data=>{
        setPic(data.url.toString())
        console.log(data.url.toString())
        setLoading(false)
      }).catch(error=>{
        console.log(error)
        setLoading(false)
      })
    }
    else
    {
      toast({
        title: 'Please Select an Image',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
      return;
    }
  }
  const Submithandler=async()=>{
    setLoading(true)
    if(!name || !email || !password || !confirmpassword)
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
    if(password!==confirmpassword)
    {
      toast({
        title: 'Please fill all the fields',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position:"bottom"
      })
    }
    try {
        const data=await axios.post("http://localhost:3001/api/user",{name,email,password,pic},{headers:{
          "Content-type":"application/json"
        }})
        // console.log(data)
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
        {/* input  Name*/}
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </FormControl>

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

      {/* input  Confirm Password*/}
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
            <Input type={show?"text":"password"} value={confirmpassword} placeholder="Confirm Password" onChange={(e)=>setConfirmpassword(e.target.value)}/>
            <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show?"Hide":"Show"}
            </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* input  Picture*/}
      <FormControl id="pic">
        <FormLabel>Upload Your Picture</FormLabel>
        <Input type="file"
        p={1.5}
        accept="image/*"
        onChange={(e)=>postDetails(e.target.files[0])}/>
      </FormControl>

      {/* Button Sign up */}
      <Button
      colorScheme="blue"
      width="100%"
      style={{marginTop:15}}
      onClick={Submithandler}
      isLoading={loading}
      >
        Signup
      </Button>
    </VStack>
  )
}

export default Signup