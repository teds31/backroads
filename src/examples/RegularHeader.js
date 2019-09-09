import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`
const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        return (
          <>
            <h4>title : {data.site.siteMetadata.title}</h4>
            <h4>author : {data.site.siteMetadata.author}</h4>
            <h5>description : {data.site.siteMetadata.description}</h5>
          </>
        )
      }}
    />
  )
}

export default RegularHeader
