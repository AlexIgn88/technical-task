import Navbar from '../components/Navbar.js';
import Globe from '../components/Globe.js';
import LogoAccord from '../components/LogoAccord';
import { useBreakpointValue, Button, Box, } from '@chakra-ui/react';


export default function Header() {

    const isDesktop = useBreakpointValue({ base: false, md: true });  // начиная с 768px включается десктопное разрешение экрана

    return (
        <>
            <header
                style={{
                    zIndex: '3',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    padding: '10px',
                    marginTop: '50px',
                }}
            >
                {/* <Navbar />
                <Globe /> */}
                {isDesktop && <Navbar isDesktop={isDesktop} />}
                {isDesktop && <Globe />}
                {!isDesktop && (
                    <Box>
                        <LogoAccord isDesktop={isDesktop} />
                    </Box>)}
                {!isDesktop && (
                    <Button
                        colorScheme='gray'
                        position='absolute'
                        right='4vw'
                        width='30px'
                        height='14px'
                    >
                        Gray
                    </Button>
                )}
            </header>
        </>
    )
}