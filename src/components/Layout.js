import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.scss";
import useSiteMetadata from "./SiteMetadata";
import { ThemeProvider } from "emotion-theming";
import theme from "../theme";
import styled from "@emotion/styled";

const TemplateWrapper = ({ children, pageTitle }) => {
  const { title, description } = useSiteMetadata();
  return (
    <PageWrapper>
      <Helmet>
        <html lang="en" />
        <title>{`${title}${pageTitle ? ` | ${pageTitle}` : ""}`}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />
        <meta name="theme-color" content="#95C93D" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Navbar />
        <CenterWrapper>
          <ContentWrapper>{children}</ContentWrapper>
        </CenterWrapper>
        <Footer />
      </ThemeProvider>
    </PageWrapper>
  );
};

export default TemplateWrapper;

const PageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
});

const CenterWrapper = styled("div")({
  flex: "1 0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const ContentWrapper = styled("main")({
  width: "100%"
  // maxWidth: 1200
});
