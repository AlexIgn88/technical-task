import Head from 'next/head';
import { Box, Flex, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import backgroundMain from '../public/img/machine.png';
import backgroundAbout from '../public/img/car_interior.png';
import backgroundOurFleet from '../public/img/our_fleet.png';
import arrowLeft from '../public/img/arrow_left.png';
import arrowRight from '../public/img/arrow_right.png';
import carsData from '../data/carsData.js';
import { useState } from 'react';
import SiteButton from '../components/SiteButton';


export default function Home() {

  const [currentCarIndex, changeCarDetailsIndex] = useState(0);

  const keyValuePairs = Object.entries(carsData[currentCarIndex]);
  const flattenedArray = keyValuePairs.flat();


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Flex
        h={'100vh'}
        ml={'5vw'}
        mt={'10vw'}
        gap={'5vw'}
      >
        <Box>
          <Heading
            as={'h1'}
            fontSize={'7vmin'}
          >
            Exclusive transport services in Qatar
          </Heading>
          <Text
            mt={'30px'}
            fontSize={'2vmin'}
          >
            For the modern world, semantic analysis of external counteractions contributes to the preparation and implementation.
          </Text>
          <SiteButton />
        </Box>

        <Box
          position={'relative'}
        >
          <Image
            src={backgroundMain}
            alt='home page'
            width={944}
            height={469}
            style={{
              width: '100vw',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'center',
              position: 'relative',
              zIndex: '3',
            }}
          />
        </Box>
      </Flex>
      <Box
        h={'120vh'}
        position={'relative'}
      >
        <Box
          position={'absolute'}
          w={'487px'}
          h={'345px'}
          top={'350px'}
          right={'200px'}
          zIndex={'3'}
          color={'white'}
        >
          <Heading
            as={'h1'}
            fontSize={'40px'}
          >WHO WE ARE
          </Heading>
          <Text>
            For the modern world, semantic analysis of external counteractions contributes
            to the preparation and implementation of the distribution of internal reserves and resources.
            But thorough competitor research is gaining popularity among certain segments of the population,
            and therefore should be associatively distributed across industries. As well as replicated
            from foreign sources, modern research is declared to violate universal human norms of ethics and morality.
            Our varied and extensive experience tells us that modern development methodology is critical to the exit of current assets.
            In particular, the semantic analysis of external counteractions predetermines the high demand
            for the gradual and consistent development of society.
          </Text>
        </Box>
        <Image
          src={backgroundAbout}
          alt='about'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <Box
          position={'absolute'}
          top={'0'}
          right={'0'}
          bottom={'0'}
          width={'70%'}
          background={'linear-gradient(to left, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)'}
        />
      </Box>
      <Box
        h={'100vh'}
        mt={'50px'}
        ml={'5vw'}
      >
        <Heading
          as={'h1'}
          fontSize={'40px'}
          textAlign={'center'}
        >
          OUR FLEET
        </Heading>
        <Heading
          mt={'50px'}
          fontSize={'24px'}
        >
          {carsData[currentCarIndex].carName}
        </Heading>
        <Flex
          mt={'100px'}
        >
          <Grid
            templateColumns="repeat(2, 1fr)"
            alignContent={'space-evenly'}
          >
            {flattenedArray.slice(2).map((item, i) =>
              <GridItem
                key={i}
                fontWeight={(i % 2 === 0) ? 'bold' : 'normal'}
              >
                {item}
              </GridItem>
            )}
          </Grid>
          <Box>
            <Image
              src={backgroundOurFleet}
              alt='our fleet'
              style={{
                width: '45vw',
                height: 'auto',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Box>
        </Flex>
        <Flex
          alignItems={'center'}
        >
          <SiteButton />
          <Box
            flexGrow='1'
            display={'flex'}
            justifyContent={'center'}
            gap={'10vw'}
          >
            <Image
              src={arrowLeft}
              alt='arrow left'
              style={{
                cursor: 'pointer',
              }}
            />
            <Image
              src={arrowRight}
              alt='arrow right'
              style={{
                cursor: 'pointer',
              }}
            />
          </Box>
        </Flex>
      </Box>
    </>
  )
}