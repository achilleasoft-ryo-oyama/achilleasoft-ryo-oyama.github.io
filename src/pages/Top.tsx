import React from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { HEADLINE_TITLES } from "../assets/HeadlineTitles";
import { POSITION_CONTENTS } from "../assets/PositionContensts";
import { Language_CONTENTS } from "../assets/LanguageContents";
import { Library_CONTENTS } from "../assets/LibraryContents";
import { headlineTitle } from "../components/headlineTitle";
import { contentsArea } from "../components/contentsArea";

const Top = () => {
	return (
		<Box>
			{baseInfo()} {headlineTitle(HEADLINE_TITLES[0])}
			{contentsArea(POSITION_CONTENTS)}
			{headlineTitle(HEADLINE_TITLES[1])}
			{contentsArea(Language_CONTENTS)}
			{headlineTitle(HEADLINE_TITLES[2])}
			{contentsArea(Library_CONTENTS)}
		</Box>
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

export default Top;
