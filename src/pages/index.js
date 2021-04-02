import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {
    // console.log(props.data)
    return (
      <Layout>
          {props.data.allBook.edges.map(edge => {
              return (
                <div key={edge.node.id}>
                    <h2>
                        {edge.node.title} - {edge.node.author.name}
                    </h2>
                    <Link to={`/book/${edge.node.id}`}>
                        Go to book
                    </Link>
                </div>
              )
          })}
      </Layout>
    )
}

export const query = graphql`
    {
        allBook {
            edges {
                node {
                    title
                    id
                    imageUrl
                    author {
                        name
                    }
                }
            }
        }
    }
`

export default IndexPage
