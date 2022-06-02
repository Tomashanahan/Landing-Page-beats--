import { Box,FormControl,FormLabel,Textarea,SimpleGrid,Input,Radio, Button} from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'

import {AiFillCheckCircle} from 'react-icons/ai'

import { Link } from 'react-router-dom'

function Contact() {
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const [inputName,setInputName] = React.useState('')
    const [inputLastName,setInputLastName] = React.useState('')
    const [inputEmail,setInputEmail] = React.useState('')
    const [inputPassword,setInputPassword] = React.useState('')

    const emailRejex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    
    function onSubmit(data) {
        console.log(data);
    }
// data-aos="fade-down" data-aos-duration="1500"
// data-aos="fade-down" data-aos-duration="2000"
// data-aos="fade-down" data-aos-duration="2500"
// data-aos="fade-down" data-aos-duration="2700"
// data-aos="fade-down" data-aos-duration="3000"
//     data-aos="fade-down" data-aos-duration="1500"
// data-aos="fade-down" data-aos-duration="2000"
// data-aos="fade-down" data-aos-duration="2500"
// data-aos="fade-down" data-aos-duration="2700"
// data-aos="fade-down" data-aos-duration="3000"
//     data-aos="fade-down" data-aos-duration="1500"
// data-aos="fade-down" data-aos-duration="2000"
// data-aos="fade-down" data-aos-duration="2500"
// data-aos="fade-down" data-aos-duration="2700"
// data-aos="fade-down" data-aos-duration="3000"
//     data-aos="fade-down" data-aos-duration="1500"
// data-aos="fade-down" data-aos-duration="2000"
// data-aos="fade-down" data-aos-duration="2500"
// data-aos="fade-down" data-aos-duration="2700"
// data-aos="fade-down" data-aos-duration="3000"

  return (
    <Box pt='200px' mb='200px' >
        <Box data-aos="fade-up" data-aos-duration="2000" fontSize={'50'}>Login</Box>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl w='60%' m='auto'>
                <SimpleGrid columns={2} spacing={4}>
                    <Box>
                        <Box data-aos="fade-down" data-aos-duration="2000">
                            <FormLabel mt={5} htmlFor='name'>First Name</FormLabel>
                            <Input id='name' bg='#E2E8F0' color={'#0A0A0B'} type='text' {...register('firstName', { required: true })} onChange={(e)=>setInputName(e.target.value)}/>
                            {errors.firstName &&  <Box color={'#FF6348'} fontWeight='light' mt={3}>Name required</Box>}
                            {(!errors.firstName && inputName.length !== 0) && 
                                <Box color='#0B9D58' position={'relative'} left='90%' top='-30px' fontSize={'xl'}>
                                    <AiFillCheckCircle/>
                                </Box>
                            }
                        </Box>

                        <Box data-aos="fade-down" data-aos-duration="1500">
                            <FormLabel mt={5} htmlFor='email'>Email address</FormLabel>
                            <Input id='email' bg='#E2E8F0' color={'#0A0A0B'}  type={'email'} {...register('email',{required:true,pattern:emailRejex})} onChange={(e)=>setInputEmail(e.target.value)}/>
                            {errors?.email?.type==='pattern' && <Box color={'#FF6348'} fontWeight='light' mt={3}>Invalid Email</Box>
                              ||
                            errors.email &&  <Box color={'#FF6348'} fontWeight='light' mt={3}>Email required</Box>}
                            {(!errors.email && inputEmail.length!==0) &&  
                                <Box color='#0B9D58' position={'relative'} left='90%' top='-30px' fontSize={'xl'}>
                                    <AiFillCheckCircle/>
                                </Box>
                            }
                        </Box>
                    </Box>
                    <Box>
                        <Box data-aos="fade-down" data-aos-duration="2000">
                            <FormLabel mt={5} htmlFor='last_name'>Last Name</FormLabel>
                            <Input id='lastName' bg='#E2E8F0' color={'#0A0A0B'} {...register('lastName', {required:true})} type='text' onChange={(e)=>setInputLastName(e.target.value)}/>
                            {errors.lastName &&  <Box color={'#FF6348'} fontWeight='light' mt={3}>Last Name required</Box>}
                            {(!errors.lastName && inputLastName.length!==0) &&  
                                <Box color='#0B9D58' position={'relative'} left='90%' top='-30px' fontSize={'xl'}>
                                    <AiFillCheckCircle/>
                                </Box>
                            }
                        </Box>
                        <Box data-aos="fade-down" data-aos-duration="1500">
                            <FormLabel  mt={5} htmlFor='password'>Password</FormLabel>
                            <Input id='password' bg='#E2E8F0' color={'#0A0A0B'} {...register('password', {required:true, minLength : 10 })} type='password' onChange={(e)=>setInputPassword(e.target.value)}/>
                            {errors?.password?.type === 'minLength' && <Box color={'#FF6348'} fontWeight='light' mt={3}>Needs to be more 10 caracters</Box> 
                                || 
                            errors.password &&  <Box color={'#FF6348'} fontWeight='light' mt={3}>Password required</Box>}

                            {(!errors.password && inputPassword.length!==0) &&  
                                <Box color='#0B9D58' position={'relative'} left='90%' top='-30px' fontSize={'xl'}>
                                    <AiFillCheckCircle/>
                                </Box>
                            }
                        </Box>
                    </Box>
                </SimpleGrid>
                <Box mt={9} cursor='pointer' textDecoration={'underline'}>
                    <Link to='/createCount'>
                        Create Count
                    </Link>
                </Box>
                <Button data-aos="fade-up" data-aos-duration="3000" color='#0A0A0B' bg='#FFFFFF' mt={6} w={'20%'} type='submit'>Send</Button>
            </FormControl>
        </form>
    </Box>
  )
}

export default Contact