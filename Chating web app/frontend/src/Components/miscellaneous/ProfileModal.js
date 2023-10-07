import { useDisclosure,Button,Text,Image,IconButton,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
const ProfileModal = ({user,children}) => {
  const {isOpen,onOpen,onClose}=useDisclosure()
  return (
    <div>
      {children?<span onClick={onOpen}>{children}</span>:<IconButton
      d={{base:'flex'}}
      icon={<ViewIcon/>}
      ></IconButton>}
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{textAlign:"center"}} h="410px">
          <ModalHeader>{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{display:'flex',flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
            <Image
            borderRadius="full"
            boxSize="150px"
            src={user.pic}
            alt={user.name}
            >
            </Image>
            <Text fontSize={{base:"28px",md:"30px"}}
            fontFamily="Work sans"
            >
                Email:{user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default ProfileModal
