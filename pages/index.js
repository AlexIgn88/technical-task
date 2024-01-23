import Head from 'next/head';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import background from '../public/img/machine.png';


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Flex
        ml={'110px'}
        mt={'230px'}
        gap={'130px'}
      >
        <Box>
          <Heading
            as={'h1'}
            fontSize={'73px'}
          >
            Exclusive transport services in Qatar
          </Heading>
          <Text
            mt={'30px'}
            fontSize={'22.5px'}
          >
            For the modern world, semantic analysis of external counteractions contributes to the preparation and implementation.
          </Text>
          <Button
            mt={'30px'}
            colorScheme='gray'
            w={'228px'}
            h={'62px'}
            borderRadius={'19px'}
            cursor={'pointer'}
          ></Button>
        </Box>

        <Box>
          <Image
            src={background}
            alt='globe'
            width={944}
            height={469}
            style={{
              borderRadius: '10px',
              width: 'auto',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Box>
      </Flex>
    </>
  )
}