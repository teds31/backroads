import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  {
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

const Header = () => {
  const { site } = useStaticQuery(getSiteData)
  return (
    <div>
      <h4>title: {site.siteMetadata.title}</h4>
      <h4>author: {site.siteMetadata.author}</h4>
    </div>
  )
}

export default Header
