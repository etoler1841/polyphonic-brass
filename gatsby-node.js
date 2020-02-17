const path = require('path')
const { DateTime } = require('luxon')
const slugify = require('slugify')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const bioTemplate = path.resolve('src/templates/bioTemplate.js')
  const articleTemplate = path.resolve('src/templates/articleTemplate.js')
  const result = await graphql(`
    {
      bios: allMarkdownRemark(
        filter: { frontmatter: { tags: { eq: "bio" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      articles: allMarkdownRemark(
        filter: { frontmatter: { tags: { eq: "article" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }
  result.data.bios.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: bioTemplate
    })
  })
  result.data.articles.edges.forEach(({ node }) => {
    const date = DateTime.fromFormat(node.frontmatter.date, 'yyyy-LL-dd')
    const year = date.toFormat('yyyy')
    const month = date.toFormat('LL')
    const slug = slugify(node.frontmatter.title, {
      remove: /[^\w\s]/g,
      lower: true
    })

    createPage({
      path: `/article/${year}/${month}/${slug}`,
      component: articleTemplate,
      context: {
        id: node.id
      }
    })
  })
}
