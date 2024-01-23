import Navbar from '../components/Navbar.js';
import Globe from '../components/Globe.js';


export default function Header() {

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
                <Navbar />
                <Globe />
            </header>
        </>
    )
}