import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ReactDocPage() {
  //docID 1,2,3 .....

  const navigate = useNavigate();

  const params = useParams();
  // console.log(params)

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.docId}`);
      // const result = await res.json();
      // console.log(result);
      console.log(res);
    }
    getData();
  })

  return (
    <>
      <h5 onClick={() => navigate('/')}>logo</h5>
      <div>      REactDocPage ##{params.docId}    </div>
    </>
  )
}

export default ReactDocPage
