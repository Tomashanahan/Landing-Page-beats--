import React from 'react'
import './header.css'
import {Link} from "react-router-dom";
import logo from '../../img/logo.png'
import {GrCart} from 'react-icons/gr'
import {Box, Button,OrderedList,ListItem} from '@chakra-ui/react'
function Header() {
  return (
    <Box  position={"fixed"} zIndex={2} w='100%' left={0} bg={'#0A0A0B'} m='auto' display={"flex"} alignItems={"center"} justifyContent={"space-around"} p={4} >
        <Box className="login" mt={3}>
           <a href="/home"><img src={logo} alt="Logo" width={"32px"}/></a>
        </Box>
        <Box w={"40%"}>
            <OrderedList display={'flex'} justifyContent="space-around" alignItems={'center'} mt={3}>
                <ListItem><Link to="/home">Home</Link></ListItem>
                <ListItem><Link to="/contact">Contact</Link></ListItem>
                <ListItem><Link to="/login">Login</Link></ListItem>
                {/* <ListItem><a to="/styles">Styles</a></ListItem> */}
                <ListItem>
                  {/* <Link to="/"> */}
                    <Button>
                      <GrCart/>
                    </Button>
                  {/* </Link> */}
                </ListItem>
            </OrderedList> 
        </Box>
       
    </Box>
  )
}

export default Header

//className='header'