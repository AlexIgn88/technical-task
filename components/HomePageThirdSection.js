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
            >
                OUR FLEET
            </Heading>
            {isDesktop && (
                <Heading
                    flexGrow={'1'}
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
                    flexGrow={'1'}
                    order={isDesktop ? '1' : '3'}
                    templateColumns="repeat(2, 1fr)"
                    alignContent={'space-evenly'}
                    w={isDesktop ? '622px' : '346px'}
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
                >
                    <Image
                        src={carsData[currentCarIndex].picture}
                        alt='our fleet'
                        width={717}
                        height={538}
                        style={{
                            width: [isDesktop ? '45vw' : 'auto'],
                            height: [isDesktop ? 'auto' : '180px'],
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
                    </Box>
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