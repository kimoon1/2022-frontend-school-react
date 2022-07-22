import React, { useContext } from 'react';
import { UserContext } from '../store/user';

function BlogPage() {
  const value = useContext(UserContext);
  console.log(value);
  return (
    <div>
      <h1>BlogPage</h1>
    </div>
  )
}

export default BlogPage
