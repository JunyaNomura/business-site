import {
  Container,
  Center,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson, BsTelephone } from 'react-icons/bs';

export default function Contact() {
  return (
    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      {/* <Flex > */}
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 4, lg: 4 }}
          p={{ sm: 5, md: 5, lg: 10 }}>
          <Box p={4} w={{md:'600px', lg: '800px'}}>
              <Box>
              <Heading textAlign={{base: 'center', sm:'start'}}>Contact</Heading>
                <Text mt={{ base: 3, sm: 3, md: 3, lg: 5 }} mb={{ base: 6, sm: 6, md: 6, lg: 6 }}color="gray.500">
                  お問い合わせはこちらからお願いします
                </Text>
              </Box>
              <Box bg="white" borderRadius="lg" py="px">
              <Box m={8} color="#0B0E3F">
                <VStack spacing={5}>
                  <FormControl id="name">
                    <FormLabel>お名前</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>お電話番号</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsTelephone color="gray.800" />}
                      />
                      <Input type="number" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>メールアドレス</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>お問い合わせ内容</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: 'gray.300',
                      }}
                      placeholder="message"
                    />
                  </FormControl>
                  <FormControl id="name" float="right">
                    <Button
                      variant="solid"
                      bg="#0D74FF"
                      color="white"
                      _hover={{}}>
                      送信する
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
         
          </Box>
        </Box>
      {/* </Flex> */}
    </Container>
  );
}
