import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Top from '../components/top'

const Index = 
({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <Top/>
      <h4>Posts</h4>
      {data.allWpPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
        }
      }
    }
  }`

export default Index