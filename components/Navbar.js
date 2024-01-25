import { UnorderedList, ListItem, Text, } from '@chakra-ui/react';
import Link from 'next/link';
import pages from '../data/pagesData';
import LogoAccord from '../components/LogoAccord';


export default function Navbar({ flexDirection, alignItems, isDesktop, gap, marginTop }) {

    return (
        <nav style={{
            width: '80%',
        }}>
            <UnorderedList
                listStyleType={'none'}
                display={'flex'}
                flexDirection={flexDirection}
                justifyContent={'center'}
                alignItems={alignItems}
                gap={gap}
                marginTop={marginTop}
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
                                    ? isDesktop && <LogoAccord color={'black'} isDesktop={isDesktop} />
                                    : page.name
                            }
                        </Text>
                    </ListItem>)}
            </UnorderedList>
        </nav>
    )
}
