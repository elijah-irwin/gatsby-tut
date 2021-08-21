import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(query);

  return (
    <Wrapper>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Header>{data.site.siteMetadata.title}</Header>
      <nav>
        <NavLinks>
          <NavItem><Text to="/">Home</Text></NavItem>
          <NavItem><Text to="/about">About</Text></NavItem>
          <NavItem><Text to="/blog">Blog</Text></NavItem>
        </NavLinks>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`;

const Header = styled.header`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
  margin: 3rem 0;
`;

const Heading = styled.h1`
  color: rebeccapurple;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const NavItem = styled.li`
  padding-right: 2rem;
`;

const Text = styled(Link)`
  color: black;
`;

export default Layout;
