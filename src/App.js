import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
/* CHACKRA UI */
import {
	Box,
	ChakraProvider,
	Container,
	extendTheme,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
/* COMPONENTS */
import Header from "./Components/Header/Header";
import Banner from "./Components/Header/Banner";
import Specs from "./Components/Specs/Specs";
import Case from "./Components/Case/Case";
import Chose from "./Components/Chose/Chose";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
/* SCROLL ANIMATIONS */
import "aos/dist/aos.css";

const theme = extendTheme({
	fonts: {
		heading: "Cascadia Code",
		body: "Poppins",
	},
});

function App() {
	return (
		<ChakraProvider theme={theme}>
			{/* <Router> */}
			<Box theme={"theme"} className="App" fontWeight={"bold"} bg={"#15191C"}>
				<Routes>
					<Route
						path="/home"
						exact
						element={
							<Box color={"white"} width={"80%"} m={"auto"}>
								<Header />
								<Banner />
								<Specs />
								<Case />
								<Chose />
								<Footer />
							</Box>
						}
					/>
					<Route
						path="/contact"
						exact
						element={
							<Box color={"white"} width={"80%"} m={"auto"}>
								<Header />
								<Contact />
								<Footer />
							</Box>
						}
					/>
					<Route
						path="/login"
						exact
						element={
							<Box color={"white"} width={"80%"} m={"auto"}>
								<Header />
								<Login />
								<Footer />
							</Box>
						}
					/>
					<Route
						path="/createCount"
						exact
						element={
							<Box color={"white"} width={"80%"} m={"auto"}>
								<Header />
								{/* <Login/> */}
								<Footer />
							</Box>
						}
					/>
					<Route
						path="/"
						exact
						element={
							<Box color={"white"} width={"80%"} m={"auto"}>
								<Header />
								<Banner />
								<Specs />
								<Case />
								<Chose />
								<Footer />
							</Box>
						}
					/>
				</Routes>
			</Box>
			{/* </Router> */}
		</ChakraProvider>
	);
}

export default App;
