import Navbar from '../components/Navbar.js';
import Globe from '../components/Globe.js';
import LogoAccord from '../components/LogoAccord';
import { useBreakpointValue, Box, } from '@chakra-ui/react';
import NavDrawerMenu from '../components/NavDrawerMenu.js';


export default function Header() {

    const isDesktop = useBreakpointValue({ base: false, md: true });  // выше 768px - десктопное разрешение экрана

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
                {isDesktop && <Navbar isDesktop={isDesktop} />}
                {isDesktop && (
                    <Box
                        p={'10px'}
                        position={'relative'}
                        cursor={'pointer'}
                    >
                        <Globe color={'black'} />
                    </Box>
                )}
                {!isDesktop && (
                    <Box>
                        <LogoAccord isDesktop={isDesktop} />
                    </Box>)}
                {!isDesktop && (
                    <NavDrawerMenu />
                )}
            </header>
        </>
    )
}