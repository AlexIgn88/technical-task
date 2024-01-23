import {
    UnorderedList, ListItem,
    Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import pages from '../data/pagesData';
import Image from 'next/image';
import background from '../public/img/logo_accord.png';


export default function Navbar() {

    return (
        <nav style={{
            width: '100%',
        }}>
            <UnorderedList
                listStyleType={'none'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'100px'}
            >
                {pages.map(page =>
                    <ListItem key={page.name}>
                        <Text
                            as={Link}
                            href={page.src}
                            className="link"
                            color={'white'}
                            textDecoration={'none'}
                        >
                            {
                                page.name === 'Accord'
                                    ? <LogoAccord />
                                    : page.name
                            }
                        </Text>
                    </ListItem>)}
            </UnorderedList>
        </nav>
    )
}

function LogoAccord() {

    return (
        <Image
            src={background}
            alt='Accord.LIMO'
            width={235}
            height={27}
            style={{
                borderRadius: '10px',
                width: 'auto',
                height: 'auto',
                objectFit: 'cover',
                objectPosition: 'center',
            }}
        />)
}
