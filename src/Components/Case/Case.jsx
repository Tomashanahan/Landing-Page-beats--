import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import caja from "../../img/case.png";
import auriculares from "../../img/discount.png";
import { MdOutlineInfo } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";

function Case() {
	return (
		<Box pb={"100px"}>
			<Box fontSize={"40px"}>Case</Box>
			<Box
				display={"flex"}
                flexDirection={['column','column','row','row']}
				alignItems={"center"}
				justifyContent={"space-evenly"}
                w={["90%","80%","100%","100%"]}
                m='auto'
			>
				<Box data-aos="fade-down" data-aos-duration="3000" mt={6}>
					<img src={caja} alt="Foto" />
				</Box>
				<Box
					data-aos="fade-up"
					data-aos-duration="3000"
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					justifyContent={"left"}
					w={["90%","80%","50%","50%"]}
					mt={["70px","70px","70px","0"]}
					textAlign={"left"}
				>
					With a comfortable and adaptable case so that you can store it
					whenever you want, and keep your durability forever.
					<Button bg="#0A0A0B" variant="solid" p={(8, 6)} mt={5}>
						<Box fontSize={"20px"} mr={2}>
							<MdOutlineInfo />
						</Box>
						More info
					</Button>
				</Box>
			</Box>
			<Box
				display={"flex"}
				flexDirection={['column','column','row','row']}
				alignItems={"center"}
				justifyContent={"space-evenly"}
				w={["90%","90%","90%","90%"]}
				m={"auto"}
				mt={"100px"}
				bg="#0A0A0B"
				p={9}
				borderRadius={9}
			>
				<Box
					data-aos="fade-right"
					data-aos-duration="3000"
					textAlign={"left"}
				>
					<Box fontSize={"22px"}>Immerse yourself inyour music</Box>
					<Box fontWeight={"light"}>Get it now, up to 50% off.</Box>
					<Button bg="#15191C" variant="solid" p={(8, 6)} mt={5}>
						<Box fontSize={"20px"} mr={2}>
							<BiShoppingBag />
						</Box>
						Shop Now
					</Button>
				</Box>
				<Image
					mt={['50px','50px','0','0']}
					data-aos="fade-left"
					data-aos-duration="3000"
					src={auriculares}
					width="350px"
					alt="Foto"
				/>
			</Box>
		</Box>
	);
}

export default Case;
