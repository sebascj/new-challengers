import Head from "next/head";
import Layout from "../src/components/layout/layout";
import { Title, Subtitle } from "../src/components/text/Text";
import Link from "next/link";

import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 4em;
  @media (max-width: 900px) {
    height: unset;
    align-items: center;
    margin: 10rem 2rem 0;
    padding-bottom: 0;
  }
`;
const SubtitleMobile = styled(Subtitle)`
  @media (max-width: 900px) {
    text-align: center;
  }
`;
const Contact = styled.div`
  border: 1px solid var(--theme-red);
  text-align: center;
  width: 220px;
  height: 50px;
  a {
    display: block;
    font-family: "Hind Vadodara";
    background: none;
    color: var(--theme-red);
    line-height: 50px;
    text-decoration: none;

    &:visited {
      color: var(--theme-red);
    }
    &:hover {
      background-color: var(--theme-red);
      color: var(--white);
      transition: 0.3s ease-out all;
    }
  }
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Sebastian</title>
      </Head>
      <Layout>
        <Content>
          <Title>
            Hello,
            <br /> We are New Challengers Store
          </Title>
          <SubtitleMobile>Type something.</SubtitleMobile>
          <div>{"<search bar here>"}</div>
        </Content>
      </Layout>
    </>
  );
}
