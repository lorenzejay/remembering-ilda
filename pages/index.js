import About from "../components/About";
import DidYouKnow from "../components/didYouKnow";
import Layout from "../components/Layout";
import Remembering from "../components/remembering";
import Waiting from "../components/waiting";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Remembering Ilda</title>
      </Head>
      <Layout>
        <Remembering />
        <Waiting />
        {/* <About />
      <DidYouKnow /> */}
      </Layout>
    </>
  );
}
