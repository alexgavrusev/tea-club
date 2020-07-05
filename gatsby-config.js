module.exports = {
  siteMetadata: {
    lang: "en",
    // HACK: using arrays so that graphql doesn't add absent fields to items
    meta: [
      [
        ["name", "viewport"],
        ["content", "width=device-width, initial-scale=1, shrink-to-fit=no"],
      ],
      [
        ["name", "author"],
        ["content", "@gavrusev"],
      ],
      [
        ["name", "description"],
        ["content", "Чайные церемонии в Зеленограде и Москве"],
      ],
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Tea club",
        short_name: "Tea club",
        start_url: "/",
        background_color: "#0d3d1a",
        theme_color: "#0d3d1a",
        display: "minimal-ui",
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Playfair Display", "Open Sans"],
        },
      },
    },
  ],
};
