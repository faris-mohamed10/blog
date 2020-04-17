module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`],
}
plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/blog/src/markdown-pages`,
    },
  },
  `gatsby-transformer-remark`,
]
