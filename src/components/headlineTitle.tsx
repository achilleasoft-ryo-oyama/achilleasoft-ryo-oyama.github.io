import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";

export const headlineTitle = (title: string) => {
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
