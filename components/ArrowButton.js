import { IconButton, } from '@chakra-ui/react';
import Image from 'next/image';
import arrowLeft from '../public/img/arrow_left.png';
import arrowRight from '../public/img/arrow_right.png';
import arrowLeftMobile from '../public/img/arrow_left_mobile.png';
import arrowRightMobile from '../public/img/arrow_right_mobile.png';


export default function ArrowButton({ direction, size }) {

    let arrowIco;

    switch (true) {
        case direction === 'Left' && size === true: arrowIco = arrowLeft;
            break;
        case direction === 'right' && size === true: arrowIco = arrowRight;
            break;
        case direction === 'Left' && size === false: arrowIco = arrowLeftMobile;
            break;
        case direction === 'right' && size === false: arrowIco = arrowRightMobile;
            break;
        default: return;
    }

    return (
        <IconButton
            onClick={() => alert(direction)}
            backgroundColor={'white'}
            _hover={{
                backgroundColor: 'white',
            }}
            _active={{
                backgroundColor: 'white',
            }}
            icon={
                <Image
                    alt='arrow'
                    src={arrowIco}
                />
            }
        />
    )
}
