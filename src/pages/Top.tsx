import React from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

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
	const myPhoto = require("../assets/images/my_photo.jpeg");
	return (
		<Box>
			<Flex
				marginTop={{ base: "3", md: "5", lg: "5" }}
				h={"auto"}
				justifyContent="center"
				align={"center"}
			>
				<Grid
					templateColumns={{ md: "repeat(2, 1fr)", sm: "1fr" }}
					templateRows={{ md: "1fr", sm: "repeat(2, 1fr)" }}
					gap={2}
				>
					<GridItem justifyItems={{ md: "end", sm: "center" }} display="grid">
						<Image
							boxSize={{ base: "150px", md: "175px", lg: "200px" }}
							borderRadius="full"
							objectFit="cover"
							src={myPhoto}
							alt="ryo_oyama_image"
						/>
					</GridItem>
					<GridItem justifyItems={{ md: "start", sm: "center" }} display="grid">
						<Flex
							marginStart={{ md: "5", sm: "0" }}
							h={"auto"}
							justifyContent={{ md: "center", sm: "center" }}
							align={{ md: "start", sm: "center" }}
							flexFlow="column"
						>
							<Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
								大山 亮 : Ryo Oyama
							</Text>
							<Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
								所属1. アキレアソフト代表
								<br />
								所属2. 中小企業開発部課長
							</Text>
						</Flex>
					</GridItem>
				</Grid>
			</Flex>
		</Box>
	);
};

export default Top;
