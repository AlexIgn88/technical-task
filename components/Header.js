import Navbar from '../components/Navbar.js';
import Globe from '../components/Globe.js';
import LogoAccord from '../components/LogoAccord';
import { useBreakpointValue, Box, } from '@chakra-ui/react';
import NavDrawerMenu from '../components/NavDrawerMenu.js';


export default function Header() {

    const isDesktop = useBreakpointValue({ base: true, s: false, md: true }); // выше 768px - десктопное разрешение экрана

    return (
        <>
            <header
                style={{
                    zIndex: '3',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    padding: [isDesktop ? '10px' : '30px'],
                    marginTop: [isDesktop ? '50px' : '0px'],
                }}
            >
                {isDesktop
                    ?
                    <>
                        <Navbar
                            flexDirection={'row'}
                            alignItems={'center'}
                            isDesktop={isDesktop}
                            gap={'5vw'}
                            marginTop={'0px'}
                        />
                        <Box
                            p={'10px'}
                            position={'relative'}
                            cursor={'pointer'}
                        >
                            <Globe
                                color={'black'}
                                isDesktop={isDesktop}
                            />
                        </Box>
                    </>

                    :
                    <>
                        <LogoAccord
                            color={'black'}
                            isDesktop={isDesktop}
                        />
                        <NavDrawerMenu />
                    </>
                }
            </header>
        </>
    )
}