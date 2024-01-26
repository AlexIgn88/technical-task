import { Box, Flex, Heading, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
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
        <Flex
            h={'100vh'}
            ml={'6vw'}
            mr={'6vw'}
            mt={isDesktop ? '50px' : '30px'}

            flexDirection={'column'}
            justifyContent={'space-between'}

        >
            <Heading
                as={'h1'}
                fontSize={isDesktop ? '40px' : '25px'}
                textAlign={'center'}
                flexGrow={'1'}
            >
                OUR FLEET
            </Heading>
            {isDesktop && (
                <Heading
                    fontSize={'24px'}
                >
                    {carsData[currentCarIndex].type}
                </Heading>)}
            <Flex
                flexGrow={'1'}
                mt={isDesktop ? '50px' : '20px'}
                flexDirection={isDesktop ? 'row' : 'column'}
                alignItems={isDesktop ? 'normal' : 'center'}
            >
                <Grid
                    templateColumns="repeat(2, 1fr)"
                    alignContent={'space-evenly'}
                    gap={'20px'}
                    mt={'70px'}
                    mb={'70px'}
                    flexGrow={'1'}
                    order={isDesktop ? '1' : '3'}
                    w={'auto'}
                    h={isDesktop ? '412px' : '444px'}
                >
                    {flattenedArray.slice(4).map((item, i) =>
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
                        w={'270.94px'}
                        justifyContent={'space-evenly'}
                    >
                        <ArrowButton
                            direction={'Left'}
                            size={isDesktop}
                            data={carsData}
                            currentValue={currentCarIndex}
                            changeValue={changeCarDetailsIndex}
                        />
                        <Heading
                            mt={'20px'}
                            fontSize={'18px'}
                            mb={'20px'}
                            flexGrow={'1'}
                            display={'flex'}
                            justifyContent={'center'}
                        >
                            {carsData[currentCarIndex].type}
                        </Heading>
                        <ArrowButton
                            direction={'right'}
                            size={isDesktop}
                            data={carsData}
                            currentValue={currentCarIndex}
                            changeValue={changeCarDetailsIndex}
                        />
                    </Flex>)}
                <Box
                    order={isDesktop ? '2' : '1'}
                    w={{ base: '60vw', md: '40vw', sm: '35vw' }}
                    h={{ base: '30vh', md: '25vh', sm: '20vh' }}
                >
                    <Image
                        src={carsData[currentCarIndex].picture}
                        alt='our fleet'
                        width={717}
                        height={538}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </Box>
            </Flex>
            {isDesktop
                ? <Flex
                    alignItems={'center'}
                    position={'relative'}
                >
                    <Box
                        position={'relative'}
                        right={'5px'}
                    >
                        <SiteButton width={isDesktop ? '228px' : '166px'} />
                    </Box>
                    <Flex
                        flexGrow='1'
                        justifyContent={'center'}
                        gap={'10vw'}
                        position={'absolute'}
                        left={'60vw'}
                    >
                        <ArrowButton
                            direction={'Left'}
                            size={isDesktop}
                            data={carsData}
                            currentValue={currentCarIndex}
                            changeValue={changeCarDetailsIndex}
                        />
                        <ArrowButton
                            direction={'right'}
                            size={isDesktop}
                            data={carsData}
                            currentValue={currentCarIndex}
                            changeValue={changeCarDetailsIndex}
                        />
                    </Flex>
                </Flex>
                : <Flex
                    flexDirection={'row'}
                    justifyContent={'center'}
                >
                    <SiteButton width={isDesktop ? '228px' : '166px'} />
                </Flex>
            }
        </Flex>
    )
}