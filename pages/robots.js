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
  background-image: url("https://images.unsplash.com/photo-1546776230-bb86256870ce?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNTM3ODR8MHwxfGFsbHx8fHx8fHx8fDE2MzQ4NzM4Mjc&ixlib=rb-1.2.1&q=85");
`;

function Robots() {
  const [items, setItems] = useState([]);
  const onSearch = (searchResults) => {
    if (Array.isArray(searchResults.results)) {
      setItems(searchResults.results);
    }
  };

  return (
    <>
      <Head>
        <title>Robots | New Challengers</title>
      </Head>
      <Layout>
        <Search category="robots" onSearch={onSearch} />
        <CardsContainer>
          {items.map((item, index) => {
            return <Card key={`card_${index}`} item={item}></Card>;
          })}
        </CardsContainer>
      </Layout>
    </>
  );
}
export default Robots;
