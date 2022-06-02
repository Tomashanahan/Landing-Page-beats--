import React from 'react'
import {Box,Button} from '@chakra-ui/react'
import caja from '../../img/case.png'
import auriculares from '../../img/discount.png'
import {MdOutlineInfo} from 'react-icons/md'
import { BiShoppingBag } from 'react-icons/bi';


function Case() {
  return (
    <Box pb={"100px"} >
        <Box fontSize={"50px"}>Case</Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} >
            <Box data-aos="fade-down" data-aos-duration="3000"  mt={6}>
                <img src={caja} />
            </Box>
            <Box data-aos="fade-up" data-aos-duration="3000" display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"left"} w={"20%"} textAlign={"left"}>
                With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability forever.
                <Button bg='#0A0A0B' variant='solid' p={8,6} mt={5}>
                    <Box fontSize={"20px"} mr={2}><MdOutlineInfo/></Box>
                    More info
                </Button>
            </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} w={"60%"} m={"auto"} mt={'100px'} bg='#0A0A0B' p={9} borderRadius={9}>
            <Box data-aos="fade-right" data-aos-duration="3000" textAlign={"left"} w={"35%"}> 
                <Box fontSize={"22px"}>Immerse yourself inyour music</Box>
                <Box fontWeight={"light"}>Get it now, up to 50% off.</Box>
                <Button bg='#15191C' variant='solid' p={8,6} mt={5}>
                    <Box fontSize={"20px"} mr={2}><BiShoppingBag/></Box>
                    Shop Now
                </Button>
            </Box>
            <img data-aos="fade-left" data-aos-duration="3000" src={auriculares} width="350px"/>
        </Box>
    </Box>
  )
}

export default Case