import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import TechPage from './components/TechPage';
import BlogPage from './components/BlogPage';
import JavaScriptPage from './components/JavaScriptPage';
import ReactPage from './components/ReactPage';
import ReactDocPage from './components/ReactDocPage';

function App() {
  //root url : main page component
  // tech url : tech page component
  // blog url : blog page component

  const navigate = useNavigate();

  return (
    <BrowserRouter>
      <h5 onClick={() => navigate('/')}>logo</h5>
      <Routes>
        <Route path={'/'} element={<MainPage />}></Route>
        <Route path={'/tech'} element={<TechPage />}>
          <Route path='javascript' element={<JavaScriptPage />} />
          <Route path='react' element={<ReactPage />} />
          <Route path='react/:docId' element={<ReactDocPage />} />
        </Route>
        <Route path={'/blog'} element={<BlogPage />}></Route>
      </Routes>
    </BrowserRouter>);

}

export default App;

