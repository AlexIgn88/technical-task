import Image from 'next/image';
import blackGlobe from '../public/img/globe.png';
import whiteGlobe from '../public/img/white-globe.png';


export default function Globe({ color, isDesktop }) {
    return (
        <Image
            src={color === 'black' ? blackGlobe : whiteGlobe}
            alt='globe'
            width={33}
            height={31.2}
            style={{
                borderRadius: '10px',
                width: [isDesktop ? '33px' : '28.8px'],
                height: [isDesktop ? '31.2px' : '27.2px'],
                objectFit: 'cover',
                objectPosition: 'center',
            }}
        />
    )
}
