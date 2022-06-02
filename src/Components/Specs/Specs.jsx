import React from 'react'
/* IMGS */
import auricular from '../../img/specs.png'
/* CHAKRA UI */
import {Box, ListItem, OrderedList} from '@chakra-ui/react'
/* ICONS */
import { MdBluetoothConnected } from 'react-icons/md';
import { IoBatteryChargingOutline } from 'react-icons/io5';
import { FaChargingStation } from 'react-icons/fa';
import { BiMicrophone } from 'react-icons/bi';

function Specs() {
  return (
    <Box mt={"110px"} pb={"200px"} >
        <Box data-aos="fade-up" data-aos-duration="3000" fontSize={"40px"}>Specs</Box>
        <Box data-aos="fade-right" data-aos-duration="3000"  width={"60%"} m={"auto"} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
            <OrderedList textAlign={'left'}>
                <ListItem listStyleType ={"none"} mb={4} mt={4}>
                    <Box display={"flex"} justifyContent={"left"} alignItems={"center"} fontSize={"20px"}>
                        <Box mr={4}><MdBluetoothConnected/> </Box>
                        Conection
                    </Box>

                    <Box display={"flex"} justifyContent={"left"} alignItems={"center"} ml={9} fontWeight={"light"}>
                        Bluetooth v5.2
                    </Box>

                </ListItem>
                <ListItem listStyleType ={"none"} mb={4}>
                    <Box display={"flex"} justifyContent={"left"} alignItems={"center"} fontSize={"20px"}>
                        <Box mr={4}><IoBatteryChargingOutline/></Box>
                        Battery
                    </Box>

                     <Box display={"flex"} justifyContent={"left"} alignItems={"center"} ml={9} fontWeight={"light"}>
                        Duration: 40
                    </Box>
                </ListItem>
                <ListItem listStyleType ={"none"} mb={4}>
                    <Box display={"flex"} justifyContent={"left"} alignItems={"center"} fontSize={"20px"}>
                        <Box mr={4}><FaChargingStation/></Box>
                        Load
                    </Box>

                     <Box display={"flex"} justifyContent={"left"} alignItems={"center"} ml={9} fontWeight={"light"}>
                        Fast charge 4.2-AAC
                    </Box>
                </ListItem>
                <ListItem listStyleType ={"none"}>
                    <Box display={"flex"} justifyContent={"left"} alignItems={"center"} fontSize={"20px"}>
                        <Box mr={4}><BiMicrophone/></Box>
                        Microphone
                    </Box>
                     <Box display={"flex"} justifyContent={"left"} alignItems={"center"} ml={9} fontWeight={"light"}>
                        Bluetooth v5.2
                    </Box>
                </ListItem>
            </OrderedList>
            <Box data-aos="fade-down" data-aos-duration="3000"  ml={5}>
                <img  src={auricular} alt="auricular"/>
            </Box>
        </Box>

    </Box>
  )
}

export default Specs
