import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
    const photos = data.allImageData.edges[0].node.photos
    let rendered = [];
    photos.forEach((photo) => {
        rendered.push(
            // <div style={{maxHeight: 500}}>
                <Img key={photo.id} fixed={photo.localImage.childImageSharp.fixed} />
            // </div>
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
                          fixed(quality: 100) {
                            ...GatsbyImageSharpFixed
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