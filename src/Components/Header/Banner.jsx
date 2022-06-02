import React from 'react'
import banner from '../../img/home.png'
import apple from '../../img/sponsor1.png'
import spotify from '../../img/sponsor2.png'
import amazon from '../../img/sponsor3.png'
import youtube from '../../img/sponsor4.png'
import {Box, Button} from '@chakra-ui/react'
import { BiShoppingBag } from 'react-icons/bi';
function Banner() {
    return (
    <Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} p={4}  height={"550px"}>
            <Box data-aos="fade-down" data-aos-duration="3000" position={"relative"}  top={"-4rem"} zIndex={2} ml={10}>
                <img src={banner} alt="banner" width={"300px"}/>
            </Box>        
            <Box data-aos="fade-up" data-aos-duration="2000" mt={'50px'} maxW={"25%"} textAlign={"left"}>
                <Box fontSize={"60px"}>Beats 3</Box>
                <h3>Overview</h3>
                <Box mt={3} >
                    Enjoy award-winning Beats sound with wireless listening freedom and a sleek, streamlined design with comfortable padded earphones, delivering first-rate playback.
                </Box>
                <Box data-aos="fade-up" data-aos-duration="3000" mt={"20px"}>
                    <Button bg='#0A0A0B' variant='solid' p={6}>
                        <Box mr={3} fontSize={"xl"}><BiShoppingBag/></Box>
                        Add to bag 
                        <Box fontSize={"xl"} ml={3,1}>$299</Box>
                    </Button>
                </Box>
            </Box>
        </Box>

        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={"100px"}>
          <Box data-aos="fade-down" data-aos-duration="1500" m={9}> <img src={apple} alt="apple"  width={"100px"}/></Box>
          <Box data-aos="fade-down" data-aos-duration="2000" m={9}> <img src={spotify} alt="spotify"  width={"100px"}/></Box>
          <Box data-aos="fade-down" data-aos-duration="2300" m={9}> <img src={amazon} alt="amazon"  width={"100px"}/></Box>
          <Box data-aos="fade-down" data-aos-duration="3000" m={9}> <img src={youtube} alt="youtube"  width={"100px"}/></Box>
        </Box>
    </Box>
  )
}

export default Banner