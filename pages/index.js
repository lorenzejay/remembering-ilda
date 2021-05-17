import About from "../components/About";
import DidYouKnow from "../components/didYouKnow";
import Layout from "../components/Layout";
import Remembering from "../components/remembering";
import Waiting from "../components/waiting";

export default function Home() {
  return (
    <Layout>
      <Remembering />
      <Waiting />
      {/* <About />
      <DidYouKnow /> */}
    </Layout>
  );
}
