import {
    UnorderedList, ListItem,
    Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import pages from '../data/pagesData';
// import Image from 'next/image';
// import background from '../public/img/logo_accord.png';
import LogoAccord from '../components/LogoAccord';


export default function Navbar({ isDesktop }) {

    return (
        <nav style={{
            width: '80%',
        }}>
            <UnorderedList
                listStyleType={'none'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'5vw'}
            >
                {pages.map(page =>
                    <ListItem key={page.name}>
                        <Text
                            as={Link}
                            href={page.src}
                            className="link"
                            textDecoration={'none'}
                            _hover={{
                                textDecoration: 'underline'
                            }}
                        >
                            {
                                page.name === 'Accord'
                                    ? <LogoAccord isDesktop={isDesktop} />
                                    : page.name
                            }
                        </Text>
                    </ListItem>)}
            </UnorderedList>
        </nav>
    )
}

