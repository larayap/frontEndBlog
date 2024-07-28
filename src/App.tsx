import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList.tsx';
import PostDetails from './components/PostDetails.tsx';
import PostForm from './components/PostForm.tsx';
import '@mantine/core/styles.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/frontEndBlog" element={<PostsList />} />
        <Route path="/frontEndBlog/posts" element={<PostsList />} />
        <Route path="/frontEndBlog/posts/:id" element={<PostDetails />} />
        <Route path="/frontEndBlog/posts/create" element={<PostForm />} />
      </Routes>
    </Router>
  );
}

export default App;
