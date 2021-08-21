import React from 'react';
import { Link, graphql } from 'gatsby';

// Components
import Layout from '../../components/layout';

const Blog = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout pageTitle="My Blog Posts">
      {posts.map(post => (
        <article key={post.id}>
          <h2>
            <Link to={`/blog/${post.slug}`}>
              {post.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {post.frontmatter.date}</p>
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
        slug
      }
    }
  }
`;

export default Blog;
