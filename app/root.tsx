import React, { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction, MetaFunction } from "@remix-run/node"; // Depends on the runtime you choose

import { ServerStyleContext, ClientStyleContext } from "./context";
import { mitobyteTheme } from "./theme/mitobyte-theme";

import globalStylesUrl from "./styles/global.css";
import fontsStylesUrl from "./styles/fonts.css";

// even though we're using splide-react we import css from just splide
// https://github.com/remix-run/remix/discussions/4068#discussioncomment-3477875
import splideCSSCore from "@splidejs/splide/dist/css/splide-core.min.css";
import splideCSSTheme from "@splidejs/splide/dist/css/themes/splide-default.min.css";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Mitobyte",
    name: "viewport",
    viewport: "width=device-width,initial-scale=1",
  },
];

export let links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,100..900;1,100..900&family=Glory:ital,wght@0,100..800;1,100..800&display=swap",
    },
    {
      rel: "stylesheet",
      href: splideCSSCore,
    },
    {
      rel: "stylesheet",
      href: splideCSSTheme,
    },
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: fontsStylesUrl },
  ];
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  },
);

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={mitobyteTheme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}
