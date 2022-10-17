/*
 * Created by Formative Solutions <contact@formativesolutions.io>
 *     (https://formativesolutions.io/).
 * <project_creation_date>
 * Project: <project_name>
 */

import { ReactNode } from "react";
import type {
  GetLayoutFunction,
  NextAppPropsWithLayout
} from "@formativesolutions/next";
import DefaultLayout from "../components/default-layout";

export default function MyApp(
    {Component, pageProps }: NextAppPropsWithLayout
): ReactNode {
  
  const getLayout: GetLayoutFunction =
      Component.getLayout ?? DefaultLayout;
  
  return getLayout(<Component {...pageProps} />);
  
}
