import React from "react";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";

export const contentsArea = (contents: string[]) => {
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
				{contents.map((content: string) => {
					return (
						<GridItem w={{ base: "200px", md: "250px", lg: "300px" }}>
							<Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
								{content}
							</Text>
						</GridItem>
					);
				})}
			</Grid>
		</Flex>
	);
};
