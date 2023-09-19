import React, { useState } from 'react'
import {VStack,FormControl,FormLabel,Input,InputGroup,InputRightElement,Button} from '@chakra-ui/react'
const Signup = () => {
  const [show,setShow]=useState(false)
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [confirmpassword,setConfirmpassword]=useState()
  const [pic,setPic]=useState()

  {/* input  Toggle Method*/}
  const handleClick=()=>setShow(!show)
  const postDetails=(pic)=>{}
  const Submithandler=()=>{}
  return (
    <VStack spacing="5px" color="black">
        {/* input  Name*/}
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/>
      </FormControl>

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

      {/* input  Confirm Password*/}
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
            <Input type={show?"text":"password"} placeholder="Confirm Password" onChange={(e)=>setConfirmpassword(e.target.value)}/>
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
      >
        Signup
      </Button>
    </VStack>
  )
}

export default Signup