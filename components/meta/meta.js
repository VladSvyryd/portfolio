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
      <meta property="og:image" content="/metaPic.png" />

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
      <meta property="twitter:image" content="/metaPic.png" />
      <meta
        name="keywords"
        content="berlin, frontend, Front End Developer, React, pwa, Webanwendung"
      />
    </Head>
  );
};

export default meta;
