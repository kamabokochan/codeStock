import "../styles/globals.scss";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
// import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "../styles/prism-overwrite.scss";
import type { AppProps } from "next/app";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  height: 30px;
  background: grey;
`;

const Main = styled.main`
  padding: 16px 8px;
  flex-grow: 1;
`;

const Footer = styled.footer`
  height: 30px;
  background: grey;
  margin-top: auto;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>ヘッダー</Header>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer>フッター</Footer>
    </Container>
  );
}

export default MyApp;
