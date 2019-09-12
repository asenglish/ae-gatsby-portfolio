import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
    const photos = data.allImageData.edges[0].node.photos
    let rendered = [];
    photos.forEach((photo) => {
        rendered.push(
            <span>Image: {photo.id}</span>,
            <Img key={photo.id} fluid={photo.localImage.childImageSharp.fluid} />
        )
    })
    return rendered;
}

export const query = graphql`
  query {
    allImageData {
        edges {
            node {
                photos {
                    localImage {
                        childImageSharp {
                          fluid(maxWidth: 9999, maxHeight: 9999) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                      id
                }
            }
        }
    }
  }
`