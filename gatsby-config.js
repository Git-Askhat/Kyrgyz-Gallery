module.exports = {
  siteMetadata: {
      title: `kyrgyz-gallery`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      // "path": `${__dirname}/assets/images`,
      "path": "./src/images/"
    },
    __key: "images",
  }]
};