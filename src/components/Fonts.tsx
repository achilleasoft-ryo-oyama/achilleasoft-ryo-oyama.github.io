import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => {
	const KaiseiTokuminBold = require("../assets/fonts/Kaisei_Tokumin/KaiseiTokumin-Bold.ttf");
	const KaiseiTokuminExtraBold = require("../assets/fonts/Kaisei_Tokumin/KaiseiTokumin-ExtraBold.ttf");
	const KaiseiTokuminMedium = require("../assets/fonts/Kaisei_Tokumin/KaiseiTokumin-Medium.ttf");
	const KaiseiTokuminRegular = require("../assets/fonts/Kaisei_Tokumin/KaiseiTokumin-Regular.ttf");
	return (
		<Global
			styles={`
            /* デフォルト */
            @font-face {
                font-family: 'KaiseiTokumin';
                src: url(${KaiseiTokuminBold}) format('truetype'), url(${KaiseiTokuminExtraBold}) format('truetype'), url(${KaiseiTokuminMedium}) format('truetype'), url(${KaiseiTokuminRegular}) format('truetype')
            }
        `}
		/>
	);
};

export default Fonts;
