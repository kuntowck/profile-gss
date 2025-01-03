import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased font-raleway">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
