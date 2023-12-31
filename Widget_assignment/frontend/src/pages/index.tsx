import Head from "next/head";
import Widget from "../../component/Widget";
function Home() {
  return (
    <>
      <Head>
        <title>Widget</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Widget/>
      </main>
    </>
  );
}

export default Home;
