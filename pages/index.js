import Head from "next/head";
import Layout from "../src/components/layout/layout";
import { Title, Subtitle } from "../src/components/text/Text";

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

const Background = styled.div`
  background-image: url("https://images.unsplash.com/photo-1617802690992-15d93263d3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTM3ODR8MHwxfGFsbHx8fHx8fHx8fDE2MzQ4NzY2NTU&ixlib=rb-1.2.1&q=80&w=1080");
  background-size: cover;
`;
const SubtitleMobile = styled(Subtitle)`
  @media (max-width: 900px) {
    text-align: center;
  }
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Sebastian</title>
      </Head>
      <Background>
        <Layout>
          <Content>
            <Title>
              Hello,
              <br /> We are New Challengers Store
            </Title>
            <SubtitleMobile>
              Technology is the present and future of our generations.
            </SubtitleMobile>
          </Content>
        </Layout>
      </Background>
    </>
  );
}
