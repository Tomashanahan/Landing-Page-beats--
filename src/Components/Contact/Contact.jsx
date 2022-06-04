import React, { useEffect } from "react";
import {
	Box,
	FormControl,
	FormLabel,
	Textarea,
	SimpleGrid,
	Input,
	Radio,
	Button,
} from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";

function Contact() {
	const initialState = { firstName: "", lastName: "", email: "" };
	const [formValues, setFormValues] = React.useState(initialState);
	const [formErrors, setFormErrors] = React.useState({});
	const [isSubmut, setIsSubmut] = React.useState(false);

	function handleInputValue(e) {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
		console.log(formValues);
	}

	function handleSubmut(e) {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmut(true);
	}

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	const validate = (values) => {
		const errors = {};
		const rejex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.firstName) errors.firstName = "First name need to be completed";

		if (!values.lastName) errors.lastName = "Last name need to be completed";

		if (!values.email) errors.email = "Email need to be completed";
		else if (!rejex.test(values.email)) errors.email = "Email is invalid";

		return errors;
	};

	return (
		<Box pt={["100px", "120px", "150px", "150px"]} mb="100px" minH={"900px"}>
			<Box data-aos="fade-up" data-aos-duration="3000" fontSize={"50"}>
				Contact Us
			</Box>
			<form onSubmit={handleSubmut}>
				<FormControl w={["100%", "80%", "70%", "60%"]} m="auto">
					<SimpleGrid columns={[1, 1, 2, 2]} spacing={4}>
						<Box>
							<Box minH={"110px"} data-aos="fade-down" data-aos-duration="2000">
								<FormLabel mt={5} htmlFor="name">
									First Name
								</FormLabel>
								<Input
									bg="#E2E8F0"
									color={"#0A0A0B"}
									id="firstName"
									name="firstName"
									type="text"
									value={formValues.firstName}
									onChange={handleInputValue}
								/>
								{!formErrors.firstName && formValues.firstName !== "" && (
									<Box
										color="#0B9D58"
										position={"relative"}
										left="90%"
										top="-30px"
										fontSize={"xl"}
									>
										<AiFillCheckCircle />
									</Box>
								)}
								<Box color={"#FF6348"} fontWeight="light" mt={3}>
									{formErrors.firstName}
								</Box>
							</Box>

							<Box minH={"110px"} data-aos="fade-down" data-aos-duration="1500">
								<FormLabel mt={5} htmlFor="email">
									Email address
								</FormLabel>
								<Input
									bg="#E2E8F0"
									color={"#0A0A0B"}
									name="email"
									type="text"
									value={formValues.email}
									onChange={handleInputValue}
								/>
								{!formErrors.email && formValues.email !== "" && (
									<Box
										color="#0B9D58"
										position={"relative"}
										left="90%"
										top="-30px"
										fontSize={"xl"}
									>
										<AiFillCheckCircle />
									</Box>
								)}
								<Box color={"#FF6348"} fontWeight="light" mt={3}>
									{formErrors.email}
								</Box>
							</Box>
						</Box>
						<Box>
							<Box minH={"110px"} data-aos="fade-down" data-aos-duration="2000">
								<FormLabel mt={5} htmlFor="last_name">
									Last Name
								</FormLabel>
								<Input
									bg="#E2E8F0"
									color={"#0A0A0B"}
									name="lastName"
									type="text"
									value={formValues.lastName}
									onChange={handleInputValue}
								/>
								{!formErrors.lastName && formValues.lastName !== "" && (
									<Box
										color="#0B9D58"
										position={"relative"}
										left="90%"
										top="-30px"
										fontSize={"xl"}
									>
										<AiFillCheckCircle />
									</Box>
								)}
								<Box color={"#FF6348"} fontWeight="light" mt={3}>
									{formErrors.lastName}
								</Box>
							</Box>

							<Box data-aos="fade-down" data-aos-duration="1500">
								<FormLabel mt={5} htmlFor="phone">
									Phone
								</FormLabel>
								<Input
									bg="#E2E8F0"
									color={"#0A0A0B"}
									name="phone"
									type="text"
								/>
							</Box>
						</Box>
					</SimpleGrid>
					<Radio mt={6} value="terms and conditions" isRequired>
						Acept tems and conditions
					</Radio>

					<Textarea mt={6} placeholder="How can we help you?" />
					<Button
						data-aos="fade-up"
						data-aos-duration="3000"
						color="#0A0A0B"
						bg="#FFFFFF"
						mt={6}
						w={["100%", "80%", "70%", "40%"]}
						type="submit"
					>
						Send
					</Button>
				</FormControl>
			</form>
		</Box>
	);
}

export default Contact;
