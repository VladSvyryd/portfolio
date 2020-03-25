import Head from "next/head";

const meta = () => {
  return (
    <Head>
      <title>{"Vlad Sv | Frontend Developer | React Enthusiast"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {"<!-- Primary Meta Tags -->"}
      <title>Vlad Sv | Frontend Developer | React Enthusiast</title>
      <meta
        name="title"
        content="Vlad Sv | Frontend Developer | React Enthusiast"
      />
      <meta
        name="description"
        content="Front End developer with experience building responsive websites and web applications."
      />

      {"<!-- Open Graph / Facebook -->"}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://portfolio-sv.now.sh/" />
      <meta
        property="og:title"
        content="Vlad Sv | Frontend Developer | React Enthusiast"
      />
      <meta
        property="og:description"
        content="Front End developer with experience building responsive websites and web applications."
      />
      <meta
        property="og:image"
        content="https://portfolio-sv.now.sh/metaPic.png"
      />

      {"<!-- Twitter -->"}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://portfolio-sv.now.sh/" />
      <meta
        property="twitter:title"
        content="Vlad Sv | Frontend Developer | React Enthusiast"
      />
      <meta
        property="twitter:description"
        content="Front End developer with experience building responsive websites and web applications."
      />
      <meta
        property="twitter:image"
        content="https://portfolio-sv.now.sh/metaPic.png"
      />
      <meta
        name="keywords"
        content="berlin, frontend, Front End Developer, React, pwa, Webanwendung"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  );
};

export default meta;
