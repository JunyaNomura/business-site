import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link
} from '@chakra-ui/react';

import NextLink from 'next/link'

export default function Hero() {
  return (
    <Flex
      w={'full'}
      h={'80vh'}
      backgroundImage={
        'url(http://unsplash.it/500/300/?random)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={800}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>
            Cheat Days
          </Text>
          <Text
            color={'white'}
            fontWeight={500}
            lineHeight={1.5}
            fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
            Webを中心に、写真・動画・3DCG・SNS、一貫したユーザー体験をプロデュース
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
            >
              <Link as={NextLink} href='#contact'>
                Home
              </Link>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
