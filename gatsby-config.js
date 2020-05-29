module.exports = {
  siteMetadata: {
    title: `Bullshit Bingo Podcast`,
    description: `Wir sind noch in der Vorbereitungsphase, aber bereiten Sie sich auf den (bald) drittbeliebtesten Podcast in Deutschland vor!
    Bullshit Bingo, der Podcast.`,
    author: `BullshitBingo-podcast.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bullshit-bingo-podcast-logo-512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
