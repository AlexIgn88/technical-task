import Header from '../components/Header.js';
// import Footer from '../components/Footer.js';


export default function Layout({ children }) {

    return <>
        <Header />
        <main
            style={{ fontSize: '18px' }}
        >
            {children}
        </main>
        {/* <Footer /> */}
    </>
};