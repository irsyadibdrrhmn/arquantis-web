import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Markets from "../components/Markets";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Features />
      <Markets />
    </Layout>
  );
};

export default Home;