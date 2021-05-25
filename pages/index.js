import About from "../components/About";
import DidYouKnow from "../components/didYouKnow";
import Layout from "../components/Layout";
import Remembering from "../components/remembering";
import Waiting from "../components/waiting";
import Head from "next/head";
import PhotoGallery from "../components/photoGallery";
import { ReactPhotoCollage } from "react-photo-collage";
import Gallery3 from "../components/Gallery3";

export default function Home() {
  return (
    <>
      <Head>
        <title>Remembering Ilda</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Remembering />
        {/* <Waiting /> */}
        <About />
        {/* <DidYouKnow /> */}
        <PhotoGallery />
        {/* <ReactPhotoCollage /> */}
        {/* <Gallery3 /> */}
      </Layout>
    </>
  );
}
