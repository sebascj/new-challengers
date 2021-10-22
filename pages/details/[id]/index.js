import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../src/components/layout/layout";
import { useRouter } from "next/router";

import styled from "styled-components";

const Image = styled.img`
  height: 100%;
  width: 100%;
  max-width: 700px;
  object-fit: cover;
  cursor: pointer;
`;

function Computers() {
  const router = useRouter();
  const { id } = router.query;
  const [details, setDetails] = useState({ urls: {} });

  const search = async (id) => {
    try {
      const searchResult = await fetch("/.netlify/functions/search", {
        method: "POST",
        body: JSON.stringify({ id }),
      });
      const data = await searchResult.json();
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
        <title>Details | New Challengers</title>
      </Head>
      <Layout>
        <div>
          <Image src={details.urls.regular} alt={details.alt_description} />
        </div>
      </Layout>
    </>
  );
}
export default Computers;
