import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
  return (
    <Wrapper>
      <title>{pageTitle}</title>
      <nav>
        <NavLinks>
          <NavItem><Text to="/">Home</Text></NavItem>
          <NavItem><Text to="/about">About</Text></NavItem>
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
