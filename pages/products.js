import { useState } from "react";
import Head from "next/head";
import Layout from "../src/components/layout/layout";
import Search from "../src/components/search/Search";
import Card from "../src/components/card/card";

import styled from "styled-components";
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products() {
  const [items, setItems] = useState([]);
  const onSearch = (searchResults) => {
    setItems(searchResults.results);
  };

  return (
    <>
      <Head>
        <title>Products | New Challengers</title>
      </Head>
      <Layout>
        <Search onSearch={onSearch} />
        <CardsContainer>
          {items.map((item, index) => {
            return <Card key={`card_${index}`} item={item}></Card>;
          })}
        </CardsContainer>
      </Layout>
    </>
  );
}
export default Products;
