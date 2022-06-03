import { Box, Button, SimpleGrid, Input, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

import { AiOutlineInstagram } from "react-icons/ai";
/* IMGS */
import logo from "../../img/logo.png";
function Footer() {
	return (
		<Box pb={"100px"}>
			<SimpleGrid
				columns={[1, 2, 3, 4]}
				spacing={10}
				w={["100%", "100%", "90%", "90%"]}
				m={"auto"}
				pb={"20px"}
			>
				<Box>
					<img src={logo} alt="logo" width={"35px"} />
				</Box>
				<Box textAlign={["center","center","center","left"]}>
					<Box fontSize={"xl"} mb={4}>
						Products
					</Box>
					<Box fontWeight={"light"} mb={1} fontSize={"m"} color={"#BDC0C2"}>
						Headphones
					</Box>
					<Box fontWeight={"light"} mb={1} fontSize={"m"} color={"#BDC0C2"}>
						Earphones
					</Box>
					<Box fontWeight={"light"} mb={1} fontSize={"m"} color={"#BDC0C2"}>
						Earbuds
					</Box>
					<Box fontWeight={"light"} mb={1} fontSize={"m"} color={"#BDC0C2"}>
						Accesories
					</Box>
				</Box>
				<Box textAlign={["center","center","center","left"]}>
					<Box fontSize={"xl"} mb={4}>
						Support
					</Box>
					<Box fontWeight={"light"} mb={1} fontSize={"m"} color={"#BDC0C2"}>
						Product help
					</Box>
					<Box fontWeight={"light"} mb={1} fontSize={"m"} color={"#BDC0C2"}>
						Register
					</Box>
					<Box fontWeight={"light"} mb={1} fontSize={"m"} color={"#BDC0C2"}>
						Updates
					</Box>
					<Box fontWeight={"light"} mb={1} fontSize={"m"} color={"#BDC0C2"}>
						Provides
					</Box>
				</Box>
				<Flex direction={"column"} justify="center" minW={'200px'}>
					<Box display={"flex"} justifyContent={"center"}>
						<Input htmlSize={0} placeholder={"Email..."} />
						<Button bg={"#FFFFFF"} color={"#0A0A0B"} fontSize={"28px"} ml={2}>
							<FiSend />
						</Button>
					</Box>
					<Box w={"100%"} mt={3}>
						<Button fontSize={"larger"} bg={"#0A0A0B"} mr={3}>
							<FaFacebookF />
						</Button>
						<Button fontSize={"larger"} bg={"#0A0A0B"} mr={3}>
							<FiTwitter />
						</Button>
						<Button fontSize={"2xl"} bg={"#0A0A0B"} mr={3}>
							<AiOutlineInstagram />
						</Button>
					</Box>
				</Flex>
			</SimpleGrid>
		</Box>
	);
}

export default Footer;
