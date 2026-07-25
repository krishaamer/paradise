import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Tomé, the documentary — As the young painter Alex Keller Fonseca journeys through the forgotten island nation of São Tomé and Príncipe, we meet 13 talented people, who share with us their dreams."
        />
        <meta property="og:image" content="/gallery/page-1.jpg" />
        <meta property="og:video" content="http://player.vimeo.com/video/63993839" />
        <meta property="og:title" content="Early Access" />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Tomé, the documentary — Early Access" />
        <meta property="og:type" content="movie" />
        <meta
          property="og:description"
          content="We will find access to the sources of creativity of artists, and discover how their efforts, despite the uncertainties and obstacles, are worth it."
        />
        <link rel="canonical" href="/" />
        <link rel="shortcut icon" href="/tome-16x16.png" />
        <link rel="apple-touch-icon-precomposed" href="/tome-114x114.png" />
        {/* Legacy font */}
        <link
          href="https://fonts.googleapis.com/css?family=Pacifico"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

