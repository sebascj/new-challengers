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
  background-image: url("https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTM3ODR8MHwxfGFsbHx8fHx8fHx8fDE2MzQ4NzYyNjM&ixlib=rb-1.2.1&q=80&w=1080");
`;

function Computers() {
  const [items, setItems] = useState([]);
  const onSearch = (searchResults) => {
    if (Array.isArray(searchResults.results)) {
      setItems(searchResults.results);
    }
  };

  return (
    <>
      <Head>
        <title>Computers | New Challengers</title>
      </Head>
      <Layout>
        <Search category="computers" onSearch={onSearch} />
        <CardsContainer>
          {items.map((item, index) => {
            return <Card key={`card_${index}`} item={item}></Card>;
          })}
        </CardsContainer>
      </Layout>
    </>
  );
}
export default Computers;
