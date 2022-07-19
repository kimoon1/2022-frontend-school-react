import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios';
import useFetch from '../customHook/useFetch';

function ReactPage() {
  //api call -> react 에 해당하는 글의 목록을 응답 받음.
  // const [docs, setDocs] = useState([]);
  const { data } = useFetch('https://jsonplaceholder.typicode.com/posts')
  // console.log(data, loading, error);




  return (
    <div>
      {data && data.map((doc => (
        <Link
          to={`${doc.id}`}
          key={doc.id}
          style={{ display: 'block', margin: '1rem 0' }}
        >{doc.title}</Link>
      )))}

    </div>
  )
}

export default ReactPage
