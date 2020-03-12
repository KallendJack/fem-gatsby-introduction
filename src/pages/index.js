import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import usePosts from '../hooks/use-posts'

const IndexPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Read my blog</h2>
      {posts.map(post => (
        <div>
          <h3>{post.title}</h3>
          <span>{post.author}</span>
          <Link to={post.slug}>View</Link>
          Hello
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage
