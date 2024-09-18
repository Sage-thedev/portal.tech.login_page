import React, { useState } from 'react';
import { Box, Text, Flex, Heading, Image, Input, InputGroup, InputRightElement, IconButton, Link, Button } from '@chakra-ui/react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const passwordToggle = () => {
        setShowPassword(!showPassword);
    }

    const HandleOnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Box
            className="bg-green-60 flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden p-[5%]"
        >
            <Box className='flex flex-col md:flex-row shadow-lg w-full h-full'>
                <Box className='flex flex-row md:flex-col justify-center items-center gap-[16px] md:gap-[32px] w-full mb-[5px] md:w-[40%] p-7 md:p-9 py-[3rem] rounded-br-[40%] md:rounded-br-[50%] md:rounded-bl-[50%] rounded-bl-2xl border-white shadow-2xl'>
                <Image src="/logo.jpg" alt="University Logo" className='h-auto w-48 md:w-[100%]' />

                    <Heading as='h1' className='md:text-center text-fuchsia-800 text-[18px] md:text-[30.22px] leading-[29.53px] font-semibold tracking-[2.66px]'>
                        Abiola Ajimobi Technical University
                    </Heading>
                </Box>
                <Box className='md:w-[50%] w-full h-full flex flex-col pt-28 items-center bg-white md:px[10%] px-[5%] gap-[2rem]'>
                    <Heading as='h1' className='text-stone-500 text-[25px] md:text-[35px] font-semibold leading-[29.53px] tracking-widest'>
                        Portal Login
                    </Heading>
                    <form onSubmit={HandleOnSubmit}>
                        <Flex flexDirection='column' gap='32px'>
                            <Box className='w-full text-black'>
                                <Text className='text-sm font-medium block tracking-wide leading-[29.53px]'>
                                    Matric Number/Staff ID
                                </Text>
                                <Input
                                    type='text'
                                    placeholder='Matric Number/Staff ID'
                                    mb={4}
                                    className='border border-zinc-400 w-[100%] h-[40px] rounded-[7px] focus:outline-none fill-black pl-[16px]'
                                />
                                <Text className='text-sm font-medium block tracking-wide leading-[29.53px] mb-2'>
                                    Password
                                </Text>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Enter your password'
                                        mb={4}
                                        pr='3rem' // Ensure padding-right to avoid overlap
                                        className='border border-zinc-400 w-[100%] h-[40px] rounded-[7px] focus:outline-none fill-black pl-[16px]'
                                    />
                                    <InputRightElement width='1rem' height='full' display='flex' alignItems='center' bottom='0.3rem' right='0.8rem'>
                                        <IconButton
                                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                                            icon={showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                            opacity={0.7}
                                            onClick={passwordToggle}
                                            variant='link'
                                            size='sm'
                                            backgroundColor='transparent'
                                        />
                                    </InputRightElement>
                                </InputGroup>
                                <Box className='flex flex-col justify-center gap-[7.3px]'>
                                    <Button
                                        type='submit'
                                        className='bg-green-400 h-[50.61px] w-full rounded-lg mt-4 hover:bg-green-300 transition-colors'
                                    >
                                        <Text className='font-medium leading-[29.53px] tracking-wider text-lg text-white'>
                                            Login
                                        </Text>
                                    </Button>
                                    <Flex justifyContent='flex-end' mt='1rem'>
                                    <Link href='#' className='text-sm text-green-600 hover:text-stone-800'>
                                        Forgot Password?
                                    </Link>
                                    </Flex>
                                </Box>
                            </Box>
                        </Flex>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}

export default LoginForm;
