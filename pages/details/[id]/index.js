import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../src/components/layout/layout";

import { useRouter } from "next/router";

import styled from "styled-components";

function Computers() {
  const router = useRouter();
  const { id } = router.query;
  const [details, setDetails] = useState({});

  const search = async (id) => {
    try {
      const searchResult = await fetch("/.netlify/functions/search", {
        method: "POST",
        body: JSON.stringify({ id }),
      });
      const data = await searchResult.json();
      console.log(data);
      setDetails(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (id) {
      search(id);
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Computers | New Challengers</title>
      </Head>
      <Layout></Layout>
    </>
  );
}
export default Computers;
