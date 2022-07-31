import React from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { SkillContentLine, SKILL_CONTENTS } from "../assets/SkillData";

const Top = () => {
	const HEADLINE_TITLE: string = "技術スタック";
	return (
		<html>
			<head></head>
			<body>
				{baseInfo()} {headlineTitle(HEADLINE_TITLE)}{" "}
				{contentsData(SKILL_CONTENTS[0])}
				{contentsData(SKILL_CONTENTS[1])}
			</body>
		</html>
	);
};

const baseInfo = () => {
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
					<GridItem
						justifyItems={{ base: "center", md: "end", lg: "end" }}
						display="grid"
					>
						<Image
							boxSize={{ base: "150px", md: "175px", lg: "200px" }}
							borderRadius="full"
							objectFit="cover"
							src={myPhoto}
							alt="ryo_oyama_image"
						/>
					</GridItem>
					<GridItem
						justifyItems={{ base: "center", md: "start", lg: "start" }}
						display="grid"
					>
						<Flex
							marginStart={{ base: "0", md: "5", lg: "5" }}
							h={"auto"}
							justifyContent={"center"}
							align={{ base: "center", md: "start", lg: "start" }}
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

const headlineTitle = (title: string) => {
	return (
		<Grid
			templateColumns={{ md: "repeat(3, 1fr)", sm: "1fr" }}
			templateRows={{ md: "1fr", sm: "repeat(3, 1fr)" }}
			gap={3}
			marginX="50px"
			marginY="30px"
		>
			<GridItem
				justifyItems={{ base: "center", md: "end" }}
				alignSelf="center"
				display="grid"
				h={"3px"}
				backgroundColor="#91B2F2"
			/>
			<GridItem justifyItems={"center"} display="grid">
				<Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>{title}</Text>
			</GridItem>
			<GridItem
				justifyItems={{ base: "center", md: "start" }}
				alignSelf="center"
				display="grid"
				h={"3px"}
				backgroundColor="#91B2F2"
			/>
		</Grid>
	);
};

const contentsData = (contents: SkillContentLine) => {
	return (
		<Flex
			justifyContent={"center"}
			marginStart={{ base: "0%", md: "10%", lg: "10%" }}
			marginEnd={{ base: "0%", md: "10%", lg: "10%" }}
		>
			<Grid
				templateColumns={{ md: "repeat(3, 1fr)", sm: "1fr" }}
				templateRows={{ md: "1fr", sm: "repeat(3, 1fr)" }}
				gap={4}
				marginTop="10px"
			>
				<GridItem w={{ base: "200px", md: "250px", lg: "300px" }}>
					<Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
						{contents.firstContent}
					</Text>
				</GridItem>
				<GridItem w={{ base: "200px", md: "250px", lg: "300px" }}>
					<Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
						{contents.secondContent}
					</Text>
				</GridItem>
				<GridItem w={{ base: "200px", md: "250px", lg: "300px" }}>
					<Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
						{contents.thirdContent}
					</Text>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default Top;
