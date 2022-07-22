import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import TechPage from './components/TechPage';
import BlogPage from './components/BlogPage';
import JavaScriptPage from './components/JavaScriptPage';
import ReactPage from './components/ReactPage';
import ReactDocPage from './components/ReactDocPage';
import UserStore, { UserContext } from './store/user'

function App() {
  //root url : main page component
  // tech url : tech page component
  // blog url : blog page component



  return (

    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />}></Route>
        <Route path={'/tech'} element={<TechPage />}>
          <Route path='javascript' element={<JavaScriptPage />} />
          <Route path='react' element={<ReactPage />} />
          <Route path='react/:docId' element={<ReactDocPage />} />
        </Route>
      </Routes>
      <UserStore>
        <Routes>
          <Route path={'/blog'} element={<BlogPage />}></Route>
        </Routes>
      </UserStore>
    </BrowserRouter>
  );

}

export default App;

