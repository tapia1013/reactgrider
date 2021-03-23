import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = (props) => {

  // map over props to get images
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  })
  console.log(props.images);




  return (
    <div className="image-list">
      {images}
    </div>
  )
}


export default ImageList;






