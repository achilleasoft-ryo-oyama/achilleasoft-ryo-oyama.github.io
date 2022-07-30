import React from "react";
import { Box, Flex, Spacer, Image, Text } from "@chakra-ui/react";

const Top = () => {
	return (
		<html>
			<head></head>
			<body>
				<BaseInfo />
			</body>
		</html>
	);
};

const BaseInfo = () => {
	const myPhoto = require("../images/my_photo.jpeg");
	return (
		<Box>
			<Flex
				h={{ base: "200px", md: "250px", lg: "300px" }}
				justifyContent="center"
				align="center"
			>
				<Box>
					<Image
						boxSize={{ base: "150px", md: "180px", lg: "200px" }}
						borderRadius="full"
						objectFit="cover"
						src={myPhoto}
						alt="ryo_oyama_image"
					/>
				</Box>
				<Box marginInlineStart={5}>
					<Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
						大山　亮（Ryo Oyama）
					</Text>
					<Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
						所属1. アキレアソフト代表
					</Text>
					<Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
						所属2. 中小企業開発部課長
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default Top;
