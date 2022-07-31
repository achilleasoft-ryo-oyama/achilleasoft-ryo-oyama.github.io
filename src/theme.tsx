import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				backgroundColor: "#00001D",
				color: "white",
			},
		},
	},
	fonts: {
		heading: `KaiseiTokumin`,
		body: `KaiseiTokumin`,
	},
});
