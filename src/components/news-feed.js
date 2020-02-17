import React from 'react'
import { Link } from 'gatsby'
import { DateTime } from 'luxon'
import slugify from 'slugify'

const NewsFeed = ({ articles }) => {
  return (
    <div className="news">
      <h4>Latest News</h4>
      <ul>
        {articles.map(({ node }) => {
          const date = DateTime.fromFormat(node.frontmatter.date, 'yyyy-LL-dd')
          const slug = slugify(node.frontmatter.title, {
            remove: /[^\w\s]/g,
            lower: true
          })

          const path = `/article/${date.toFormat('yyyy')}/${date.toFormat(
            'LL'
          )}/${slug}`

          return (
            <li key={node.id}>
              <div className="article">
                <Link className="article-title" to={path}>
                  {node.frontmatter.title}
                </Link>
                <span className="article-date-author">
                  Posted {node.frontmatter.date} by {node.frontmatter.author}
                </span>
                <span className="article-preview">{node.excerpt}</span>
                <Link className="article-link" to={path}>
                  Read more...
                </Link>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NewsFeed
