/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description:
      "Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure!",
    author: "Teddy Stanowski",
    data: { job: "front-end developer", age: 33 },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "9qt41zekw86k",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "mJT1K72mikBQYXCNHQdHtsDwIE9HA1_eOIb0HRRcSoA",
      },
    },
    `gatsby-plugin-playground`,
  ],
}
