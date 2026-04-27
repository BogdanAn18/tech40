'use client'

import React from "react"

export default function Count(){
  const [likes, setLikes] = React.useState(0);

  function addLikes(){
    setLikes(likes + 1);
  }
  
  return (
    <button onClick={addLikes}>Like {likes}</button>
  )
}
