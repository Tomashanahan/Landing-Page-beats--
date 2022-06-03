import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { GrCart } from "react-icons/gr";
import { Box, Button, OrderedList, ListItem } from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";

function Header() {
	const [menuResponsive, setMenuResponsive] = useState(false);
	const [_width, set_width] = useState(window.frames.innerWidth);
	window.addEventListener("resize", () => {
		set_width(window.frames.innerWidth);
	});

	function handleMenuResponsive(e) {
		setMenuResponsive(true);
	}

	return (
		<Box
			position={"fixed"}
			zIndex={2}
			w="100%"
			left={0}
			bg={"#0A0A0B"}
			m="auto"
			display={"flex"}
			alignItems={"center"}
			justifyContent={["space-between", "space-between", "space-around"]}
			p={4}
		>
			<Box className="login" mt={3}>
				<a href="/home">
					<img src={logo} alt="Logo" width={"32px"} />
				</a>
			</Box>
			{_width <= 688 ? (
				<Box
					onClick={handleMenuResponsive}
					position="relative"
					zIndex={-1}
					cursor="pointer"
				>
					{" "}
					<CgMenu />{" "}
				</Box>
			) : (
				<Box w={"40%"}>
					<OrderedList
						display={"flex"}
						justifyContent="space-around"
						alignItems={"center"}
						mt={3}
					>
						<ListItem>
							<Link to="/home">Home</Link>
						</ListItem>
						<ListItem>
							<Link to="/contact">Contact</Link>
						</ListItem>
						<ListItem>
							<Link to="/login">Login</Link>
						</ListItem>
						<ListItem>
							<Button>
								<GrCart />
							</Button>
						</ListItem>
					</OrderedList>
				</Box>
			)}
			{menuResponsive && (
				<Box
					position={"absolute"}
					zIndex={10000}
					w="100%"
					h="250px"
					top="0"
					left={0}
					bg="#0F0F10"
				>
					<Box
						position={"relative"}
						top="15px"
						zIndex={10000}
						left={["90%", "94%"]}
						cursor="pointer"
						onClick={() => setMenuResponsive(false)}
					>
						<VscChromeClose />
					</Box>
					<OrderedList
						display={"flex"}
						flexDirection="column"
						justifyContent="space-around"
						alignItems={"center"}
						mt={10}
					>
						<ListItem my={3} onClick={() => setMenuResponsive(false)}>
							<Link to="/home">HOME</Link>
						</ListItem>
						<ListItem my={3} onClick={() => setMenuResponsive(false)}>
							<Link to="/contact">CONTACT</Link>
						</ListItem>
						<ListItem my={3} onClick={() => setMenuResponsive(false)}>
							<Link to="/login">LOGIN</Link>
						</ListItem>
					</OrderedList>
				</Box>
			)}
		</Box>
	);
}

export default Header;
