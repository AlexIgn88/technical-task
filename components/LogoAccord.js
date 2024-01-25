import Image from 'next/image';
import logoAccordBlack from '../public/img/logo_accord.png';
import logoAccordWhite from '../public/img/logo_accord_white.png';


export default function LogoAccord({ color, isDesktop }) {

    return (
        <Image
            src={color === 'black' ? logoAccordBlack : logoAccordWhite}
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