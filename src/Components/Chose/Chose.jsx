import React from 'react'
import {Box,Button,SimpleGrid} from '@chakra-ui/react'
import beats1 from '../../img/product1.png'
import beats2 from '../../img/product2.png'
import beats3 from '../../img/product3.png'
import beats4 from '../../img/product4.png'
import beats5 from '../../img/product5.png'
import { BiShoppingBag } from 'react-icons/bi';

function Chose() {
  return (
    <Box>
        <Box mb={9} fontSize={"50px"}>Chose Your Style</Box>
        <Box>
            <SimpleGrid columns={3} spacing={10} w={"70%"} m={"auto"} pb={"100px"}>
                <Box data-aos="fade-down" data-aos-duration="1500" bg='#0A0A0B' height='150px' p={6,3} borderRadius={9}>
                    <Box mr={0} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
                        <img src={beats1} alt="beats1" width={"96px"}/>
                        <Box display={"flex"} flexDirection={"column"} >
                            Black
                            <Button bg={"#15191C"} fontSize={"l"} mt={3}>
                                <BiShoppingBag/>
                                <Box color={"#BDC0C2"} ml={3}>$299</Box>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box data-aos="fade-down" data-aos-duration="2000" bg='#0A0A0B' height='150px' p={6,3} borderRadius={9}>
                    <Box mr={0} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
                        <img src={beats2} alt="beats2" width={"96px"}/>
                        <Box display={"flex"} flexDirection={"column"} >
                            Back and Red
                            <Button bg={"#15191C"} fontSize={"l"} mt={3}>
                                <BiShoppingBag/>
                                <Box color={"#BDC0C2"} ml={3}>$299</Box>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box data-aos="fade-down" data-aos-duration="2500" bg='#0A0A0B' height='150px' p={6,3} borderRadius={9}>
                    <Box mr={0} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
                        <img src={beats3} alt="beats3" width={"96px"}/>
                        <Box display={"flex"} flexDirection={"column"} >
                            Back Gold
                            <Button bg={"#15191C"} fontSize={"l"} mt={3}>
                                <BiShoppingBag/>
                                <Box color={"#BDC0C2"} ml={3}>$299</Box>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box data-aos="fade-down" data-aos-duration="2700" bg='#0A0A0B' height='150px' p={6,3} borderRadius={9}>
                    <Box mr={0} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
                        <img src={beats4} alt="beats4" width={"96px"}/>
                        <Box display={"flex"} flexDirection={"column"} >
                            Blue
                            <Button bg={"#15191C"} fontSize={"l"} mt={3}>
                                <BiShoppingBag/>
                                <Box color={"#BDC0C2"} ml={3}>$299</Box>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box data-aos="fade-down" data-aos-duration="3000" bg='#0A0A0B' height='150px' p={6,3} borderRadius={9}>
                    <Box mr={0} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
                        <img src={beats5} alt="beats5" width={"96px"}/>
                        <Box display={"flex"} flexDirection={"column"} >
                            Gray
                            <Button bg={"#15191C"} fontSize={"l"} mt={3}>
                                <BiShoppingBag/>
                                <Box color={"#BDC0C2"} ml={3}>$299</Box>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </SimpleGrid>

        </Box>
    </Box>
  )
}

export default Chose