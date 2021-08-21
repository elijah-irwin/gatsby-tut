import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// Components
import Layout from '../components/layout';

const Blog = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout pageTitle="My Blog Posts">
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.frontmatter.title}</h2>
          <p>Posted: {post.frontmatter.date}</p>
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default Blog;
