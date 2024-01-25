import { Button } from '@chakra-ui/react';


export default function SiteButton({ text, width }) {
    return (
        <Button
            mt={'30px'}
            colorScheme='gray'
            backgroundColor={'black'}
            _hover={{
                backgroundColor: '#393e46',
                color: 'white',
            }}
            _active={{
                backgroundColor: '#4a4a48',
                color: 'white',
            }}
            w={width}
            h={'62px'}
            borderRadius={'19px'}
            cursor={'pointer'}
        >
            {text}
        </Button>
    )
}









