const path = require(`path`)

exports.createPages = async function({ actions, graphql }) {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTourExample {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("src/templates/tour-templates.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
