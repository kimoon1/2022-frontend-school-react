import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import useFetch from '../customHook/useFetch';
import useSWR from 'swr';
import { UserContext } from '../store/user'

function ReactPage() {
  const value = useContext(UserContext);
  console.log(value);
  //api call -> react 에 해당하는 글의 목록을 응답 받음.
  const [number, setNumber] = useState(0)
  async function fetcher(url) {
    const result = await axios.get(url);
    console.log(result.data);
    return result.data;
  }
  const { data: docs, error } = useSWR('posts', () => fetcher('https://jsonplaceholder.typicode.com/posts'));
  // const { data } = useFetch('https://jsonplaceholder.typicode.com/posts')
  // console.log(data, loading, error);

  if (error) return <div>failed to load</div>
  if (!docs) return <div>loading...</div>


  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      {docs.map((doc => (
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
