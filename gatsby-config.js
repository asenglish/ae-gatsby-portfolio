module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `imageData`,
        path: './src/lib/images'
      }
    },
    { 
      resolve: `gatsby-source-filesystem`, 
      options: { 
        path: `./src/lib/images`,
        name: `imagesManifest`
      }
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'imageData',
        imagePath: 'photos[].url'
      }
    }
  ]
}