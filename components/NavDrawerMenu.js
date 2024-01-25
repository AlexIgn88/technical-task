import {
    Button, Box, useBreakpointValue, useDisclosure,
    Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, DrawerCloseButton,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import hamburgerButton from '../public/img/hamburger_button.png';
import navDrawerMenuArrowLeft from '../public/img/NavDrawerMenu_arrow_left.png';
import Globe from '../components/Globe.js';


export default function NavDrawerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <IconButton
                ref={btnRef}
                onClick={onOpen}
                title=''
                position='absolute'
                right='4vw'
                width='32px'
                height='16px'
                backgroundColor={'white'}
                _hover={{
                    backgroundColor: 'white',
                }}
                _active={{
                    backgroundColor: 'white',
                }}

                icon={<Image
                    src={hamburgerButton}
                    alt='menu'
                    width={30}
                    height={14}
                    style={{
                        width: '30px',
                        height: '14px',
                    }}
                />}
            >
            </IconButton>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>

                    <DrawerBody
                        backgroundColor={'black'}
                        color={'white'}
                    >
                        {/* <NavbarListComponent
                            flexDirection={'column'}
                        /> */}
                        <div>HERE NAV</div>
                    </DrawerBody>
                    <DrawerFooter
                        backgroundColor={'black'}

                        position={'absolute'}
                        top={'90vh'}
                        left={'40px'}
                    >
                        <DrawerCloseButton
                            w={'38px'}
                            h={'38px'}
                        >
                            {<Image
                                src={navDrawerMenuArrowLeft}
                                alt='menu'
                                width={38}
                                height={38}
                                style={{
                                    width: '38px',
                                    height: '38px',
                                }}
                            />}
                        </DrawerCloseButton>
                        <Box
                            position={'relative'}
                            bottom={'4px'}
                            left={'180px'}
                        >
                            <Globe color={'white'} />
                        </Box>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}