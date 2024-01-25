import { Box, Flex, Heading, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import backgroundOurFleet from '../public/img/our_fleet.png';
import carsData from '../data/carsData.js';
import { useState } from 'react';
import SiteButton from '../components/SiteButton';
import ArrowButton from '../components/ArrowButton';


export default function HomePageThirdSection() {

    const isDesktop = useBreakpointValue({ base: false, md: true });

    const
        [currentCarIndex, changeCarDetailsIndex] = useState(0),
        keyValuePairs = Object.entries(carsData[currentCarIndex]),
        flattenedArray = keyValuePairs.flat();

    return (
        <Box
            h={'100vh'}
            ml={'6vw'}
            mr={'6vw'}
            mt={isDesktop ? '50px' : '30px'}
        >
            <Heading
                as={'h1'}
                fontSize={isDesktop ? '40px' : '25px'}
                textAlign={'center'}
            >
                OUR FLEET
            </Heading>
            {isDesktop && (
                <Heading
                    mt={'50px'}
                    fontSize={'24px'}
                >
                    {carsData[currentCarIndex].carName}
                </Heading>)}
            <Flex
                mt={isDesktop ? '50px' : '20px'}
                flexDirection={isDesktop ? 'row' : 'column'}
                alignItems={isDesktop ? 'normal' : 'center'}
            >
                <Grid
                    order={isDesktop ? '1' : '3'}
                    templateColumns="repeat(2, 1fr)"
                    alignContent={'space-evenly'}
                    gap={isDesktop ? '0px' : '20px'}
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
                {!isDesktop && (
                    <Flex
                        order={'2'}
                        flexDirection={'row'}
                        alignItems={'center'}
                    >
                        <ArrowButton direction={'Left'} size={isDesktop} />
                        <Heading
                            mt={'20px'}
                            fontSize={'18px'}
                            mb={'20px'}
                        >
                            {carsData[currentCarIndex].carName}
                        </Heading>
                        <ArrowButton direction={'right'} size={isDesktop} />
                    </Flex>)}
                <Box
                    order={isDesktop ? '2' : '1'}
                >
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
            {isDesktop
                ? <Flex
                    alignItems={'center'}
                >
                    <SiteButton width={isDesktop ? '228px' : '166px'} />
                    <Box
                        flexGrow='1'
                        display={'flex'}
                        justifyContent={'center'}
                        gap={'10vw'}
                    >
                        <ArrowButton direction={'Left'} size={isDesktop} />
                        <ArrowButton direction={'right'} size={isDesktop} />
                    </Box>
                </Flex>
                : <Flex
                    flexDirection={'row'}
                    justifyContent={'center'}
                >
                    <SiteButton width={isDesktop ? '228px' : '166px'} />
                </Flex>
            }
        </Box>
    )
}