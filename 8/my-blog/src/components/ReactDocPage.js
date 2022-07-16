import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function ReactDocPage() {
  //docID 1,2,3 .....

  const navigate = useNavigate();

  const params = useParams();
  console.log(params)

  return (
    <>
      <h5 onClick={() => navigate('/')}>logo</h5>
      <div>      REactDocPage ##{params.docId}    </div>
    </>
  )
}

export default ReactDocPage
