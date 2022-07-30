import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

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
			<Flex marginTop={5} h={"auto"} justifyContent="center" align={"center"}>
				<Box>
					<Image
						boxSize={{ base: "120px", md: "160px", lg: "200px" }}
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
					<Text fontSize={{ base: "md", md: "xl", lg: "2xl" }}>
						所属1. アキレアソフト代表
					</Text>
					<Text fontSize={{ base: "md", md: "xl", lg: "2xl" }}>
						所属2. 中小企業開発部課長
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default Top;
