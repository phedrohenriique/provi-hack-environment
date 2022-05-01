import {
    Box,
    Text,
    Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Image from "next/image"


export default function InstitutionCard({ title, description, institution, alt, btn1, btn1Text, btn2, btn2Text }) {

    const style = {
        color: 'black',
        fontFamily: 'sans-serif',
        fontWeight: '400',
        lineHeight: '150%'
    }

    const buttonStyle = {
        colorScheme: 'white',
        color: '#003B70',
        border: '2px solid #003B70',
        boxSizing: 'border-box',
        borderRadius: '16px',
        marginBottom: '20px',
        textAlign: 'center',
        padding: '5px 8px'
    }

    return (
        <>
            <Box
                minWidth={'10vw'}
                background={'#FFFFFF'}
                border={'0.8px solid #003B70'}
                boxSizing={'border-box'}
                boxShadow={'0px 5px 30px rgba(0, 0, 0, 0.05)'}
                borderRadius={' 16px'}
                display={'flex'}
                width={'860px'}
                height={'240px'}
                marginBottom={'20px'}
            >
                <Box borderRadius={'16px 0 0 16px'} overflow={'hidden'} >
                    <Image width='900px' height='900px' src={institution} alt={alt} />
                </Box>
                <Box display={'flex'} flexDirection='column' justifyContent={'flex-start'} marginLeft={'40px'}>
                    <Box marginBottom={'20px'} >
                        <Text style={style} fontSize={'4xl'} marginTop={'20px'}>{title}</Text>
                        <Text style={style} marginRight={'20px'} >{description} </Text>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                        <Box>
                            <Button
                                style={buttonStyle}
                                marginRight={'14px'}
                            >
                                <Image src={btn1} marginRight={'8px'} />
                                {btn1Text}
                            </Button>
                            <Button
                                style={buttonStyle}
                            >
                                <Image src={btn2} />
                                {btn2Text}
                            </Button>
                        </Box>
                        <Box>
                            <Link href={'/institution'}>
                                <Button
                                    background={'#7ADFA5'}
                                    border-radius={'16px'}
                                    padding={'5px 24px'}
                                    fontWeight={'600'}
                                    fontSize={'20px'}
                                    lineHeight={'150%'}
                                    textAlign={' center'}
                                    marginRight={'20px'}
                                >
                                    Saiba +
                                </Button>
                            </Link>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </>
    )
}
