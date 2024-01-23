import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

// import { Box } from '@chakra-ui/react';


export default function Layout({ children }) {

    return <>
        <Header />
        <main>
            {/* <Box
                fontSize={textFontSize}
            > */}
            {children}
            {/* </Box> */}
        </main>
        <Footer />
    </>
};