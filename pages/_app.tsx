/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import { ReactNode } from "react";
import type {
  GetLayoutFunction,
  NextAppPropsWithLayout
} from "@formativesolutions/next";
import DefaultLayout from "../components/layout/default-layout";

export default function MyApp(
    {Component, pageProps }: NextAppPropsWithLayout
): ReactNode {
  
  const getLayout: GetLayoutFunction =
      Component.getLayout ?? DefaultLayout;
  
  return getLayout(<Component {...pageProps} />);
  
}
