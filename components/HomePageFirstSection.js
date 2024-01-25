import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import backgroundMain from '../public/img/machine.png';
import SiteButton from '../components/SiteButton';


export default function HomePageFirstSection() {

    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Flex
            h={'100vh'}
            ml={'5vw'}
            mr={isDesktop ? '0vw' : '5vw'}
            mt={isDesktop ? '10vw' : '5vw'}
            gap={'5vw'}
            flexDirection={isDesktop ? 'row' : 'column'}
            textAlign={isDesktop ? 'none' : 'center'}
        >
            {!isDesktop && (
                <Heading
                    as={'h1'}
                    fontSize={'30px'}
                >
                    Exclusive transport services in Qatar
                </Heading>)}
            <Box
                order={isDesktop ? '1' : '2'}
            >
                {isDesktop && (
                    <Heading
                        as={'h1'}
                        fontSize={'7vmin'}
                    >
                        Exclusive transport services in Qatar
                    </Heading>)}
                <Text
                    mt={'30px'}
                    fontSize={isDesktop ? '2vmin' : '16px'}
                >
                    For the modern world, semantic analysis of external counteractions contributes to the preparation and implementation.
                </Text>
                <SiteButton width={isDesktop ? '228px' : '166px'} />
            </Box>
            <Box
                position={'relative'}
                order={isDesktop ? '2' : '1'}
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
        </Flex>)
}