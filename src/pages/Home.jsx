import Layout from "../components/Layout";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import Features from "../components/Features";
import Markets from "../components/Markets";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <HomeAbout />
      <Features />
      <Markets />
    </Layout>
  );
};

export default Home;
