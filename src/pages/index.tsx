import type { NextPage } from "next";
import styled from 'styled-components';

const Home: NextPage = () => {
  return <Title>Welcome to Next.js!</Title>
};

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default Home;
