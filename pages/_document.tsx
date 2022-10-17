/*
 * Created by Formative Solutions <contact@formativesolutions.io>
 *     (https://formativesolutions.io/).
 * <project_creation_date>
 * Project: <project_name>
 */

import { ReactElement } from "react";
import { Html, Head, Main, NextScript } from "next/document";
import GlobalStyles from "../styles/global-styles";

const Document: () => ReactElement = (): ReactElement => (
	<Html>
		<Head>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap"
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
