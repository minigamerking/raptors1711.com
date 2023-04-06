/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: @frc1711/raptors1711.com
 */

import { ReactElement } from "react";
import { Html, Head, Main, NextScript } from "next/document";
import GlobalStyles from "../styles/global-styles";

const Document: () => ReactElement = (): ReactElement => (
	<Html>
		<Head>
			<link
				rel="stylesheet"
				href="/fonts/spy-agency.css"
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
			/>
		</Head>
		<body>
			<GlobalStyles />
			<Main />
			<NextScript />
		</body>
	</Html>
);

export default Document;
