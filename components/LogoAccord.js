import Image from 'next/image';
import background from '../public/img/logo_accord.png';


export default function LogoAccord({ isDesktop }) {

    return (
        <Image
            src={background}
            alt='Accord.LIMO'
            width={235}
            height={27}
            style={{
                borderRadius: '10px',
                width: [isDesktop ? '235px' : '163px'],
                height: [isDesktop ? '27px' : '19px'],
                objectFit: 'cover',
                objectPosition: 'center',
            }}
        />)
}