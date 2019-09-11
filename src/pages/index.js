import React from "react"
import photos from "../lib/photos.json"

export default () => {
    let rendered = [];
    photos.photos.forEach((photo) => {
        rendered.push(<img src={photo.url} style={{width: 100}, {height: 100}}/>)
    })
    return rendered;
}
