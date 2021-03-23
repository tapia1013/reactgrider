import React from 'react';



const ImageList = (props) => {
  // map over props to get images
  const img = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />
  })
  console.log(props.images);




  return (
    <div>
      {img}
    </div>
  )
}


export default ImageList;






