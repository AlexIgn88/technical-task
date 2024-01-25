import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import background from '../public/img/globe.png';


export default function Globe() {
    return (
        <Box
            p={'10px'}
            position={'relative'}
            cursor={'pointer'}
        >
            <Image
                src={background}
                alt='globe'
                width={33}
                height={31.2}
                style={{
                    borderRadius: '10px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
        </Box>
    )
}
