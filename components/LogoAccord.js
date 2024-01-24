import Image from 'next/image';
import background from '../public/img/logo_accord.png';


export default function LogoAccord() {

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