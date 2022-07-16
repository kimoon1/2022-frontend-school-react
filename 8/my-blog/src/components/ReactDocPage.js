import React from 'react'
import { useParams } from 'react-router-dom';

function ReactDocPage() {
  //docID 1,2,3 .....
  const params = useParams();
  console.log(params)

  return (
    <div>
      REactDocPage ##{params.docId}
    </div>
  )
}

export default ReactDocPage
