/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:57 AM -- April 8th, 2023
 * Project: raptors1711.com
 */

"use client";

import "./error.module.scss";
import type { ReactElement } from "react";
import PageTitle from "../components/page-title";

type NextErrorPageParams = {
    error: Error,
    reset: () => void,
};

type NextErrorPage = (params: NextErrorPageParams) => ReactElement;

const Error: NextErrorPage = (
    { error, reset }: NextErrorPageParams,
): ReactElement => (
    <>
        <PageTitle>Error</PageTitle>
        <pre>error.name: {error.name}</pre>
        <pre>error.message: {error.message}</pre>
        <pre>error.stack: {error.stack}</pre>
    </>
);

export default Error;
