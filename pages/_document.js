import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossorigin="crossorigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&amp;display=swap"
          rel="stylesheet"
        />
        {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
        {/* <link rel="stylesheet" href="node_modules/aos/dist/aos.css" /> */}
        {/* <script src="node_modules/aos/dist/aos.js"></script> */}
        {/* <script>
          AOS.init(); window.addEventListener("load", AOS.refresh);
        </script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
