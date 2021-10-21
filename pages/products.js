import Head from "next/head";
import Layout from "../src/components/layout/layout";
import Search from "../src/components/search/Search";

function Products() {
  return (
    <>
      <Head>
        <title>Products | New Challengers</title>
      </Head>
      <Layout>
        <Search />
      </Layout>
    </>
  );
}
export default Products;
