import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import backgroundAbout from '../public/img/car_interior.png';


export default function HomePageSecondSection() {

    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Box
            h={'120vh'}
            position={'relative'}
        >
            <Box
                position={'absolute'}
                zIndex={'3'}
                color={'white'}
                top={isDesktop ? '350px' : '220px'}
                right={isDesktop ? '200px' : 'auto'}
                left={isDesktop ? 'auto' : '30px'}
                w={isDesktop ? '487px' : '318px'}
                h={isDesktop ? '345px' : '379px'}
            >
                <Heading
                    as={'h1'}
                    fontSize={isDesktop ? '40px' : '25px'}
                >WHO WE ARE
                </Heading>
                <Text
                    fontSize={isDesktop ? '18px' : '16px'}
                    mt={'40px'}
                >
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
            <Box
                w={'100%'}
                h={isDesktop ? '100%' : '40%'}
            >
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
            </Box>
            <Box
                position={'absolute'}
                top={'0'}
                right={'0'}
                bottom={'0'}
                width={isDesktop ? '70%' : '100%'}
                background={
                    isDesktop
                        ? 'linear-gradient(to left, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)'
                        : 'linear-gradient(to top, rgba(0, 0, 0, 1) 59%, rgba(0, 0, 0, 0) 100%)'
                }
            />
        </Box>
    )
}