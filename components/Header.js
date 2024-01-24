import Navbar from '../components/Navbar.js';
import Globe from '../components/Globe.js';
import LogoAccord from '../components/LogoAccord';
import { useBreakpointValue } from '@chakra-ui/react';


export default function Header() {

    const isDesktop = useBreakpointValue({ base: false, md: true });  // начиная с 768px включается десктопное разрешение экрана

    return (
        <>
            <header
                style={{
                    zIndex: '3',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    padding: '10px',
                    marginTop: '50px',
                }}
            >
                {/* <Navbar />
                <Globe /> */}
                {isDesktop && <Navbar />}
                {isDesktop && <Globe />}
                {!isDesktop && <LogoAccord />}
                {!isDesktop && <div>HAMBURGER</div>}
            </header>
        </>
    )
}