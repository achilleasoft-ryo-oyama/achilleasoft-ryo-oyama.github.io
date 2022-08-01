import React from "react";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { SkillContentLine } from "../assets/SkillData";

export const skillContentsArea = (contents: SkillContentLine) => {
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
