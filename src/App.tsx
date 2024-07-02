import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList.tsx';
import PostDetails from './components/PostDetails.tsx';
import PostForm from './components/PostForm.tsx';
import '@mantine/core/styles.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/posts/create" element={<PostForm />} />
      </Routes>
    </Router>
  );
}

export default App;
