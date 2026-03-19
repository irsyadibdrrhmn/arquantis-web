import Layout from "../components/Layout";
import Products from "../components/Products";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";

const ProductsPage = () => {
  const { t } = useLang();
  const ph = (k) => t("pageHeroes.products", k);

  return (
    <Layout>
      <PageHero
        eyebrow={ph("eyebrow")}
        title={
          <>
            <span style={{ background:"linear-gradient(135deg,#e0c68a,#c9a45c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              {ph("title")}
            </span>
          </>
        }
        subtitle={ph("subtitle")}
        accent="gold"
      />
      <Products />
    </Layout>
  );
};

export default ProductsPage;