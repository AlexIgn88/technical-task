import { Box, Flex, Heading, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import backgroundOurFleet from '../public/img/our_fleet.png';
import arrowLeft from '../public/img/arrow_left.png';
import arrowRight from '../public/img/arrow_right.png';
import carsData from '../data/carsData.js';
import { useState } from 'react';
import SiteButton from '../components/SiteButton';


export default function HomePageThirdSection() {

    const isDesktop = useBreakpointValue({ base: false, md: true });

    const
        [currentCarIndex, changeCarDetailsIndex] = useState(0),
        keyValuePairs = Object.entries(carsData[currentCarIndex]),
        flattenedArray = keyValuePairs.flat();

    return (
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
                <SiteButton width={isDesktop ? '228px' : '166px'} />
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
    )
}