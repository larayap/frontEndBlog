// src/components/PostsList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Container, Box, IconButton, List, ListItem,
  ListItemText, Paper,
} from '@mui/material';
import { HomeOutlined as HouseIcon, AddCircleOutline as AddIcon } from '@mui/icons-material';
import '../styles/scrollbar.css'; 
const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://backendblog-919v.onrender.com/api/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: '#5f4d45' }}>
        <Toolbar>
          <IconButton edge="start" style={{ color: '#9d8072' }} aria-label="home">
            <HouseIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" component={Link} to="/frontEndBlog" style={{ flexGrow: 1, textDecoration: 'none', color: '#9d8072', fontSize: '2em', fontWeight: 'bold' }}>
            Home
          </Typography>
          <IconButton color="inherit" component={Link} to="/frontEndBlog/posts/create" style={{ textDecoration: 'none', color: '#9d8072' }}>
            <AddIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" component={Link} to="/frontEndBlog/posts/create" style={{ textDecoration: 'none', color: '#9d8072', fontSize: '2em', fontWeight: 'bold' }}>
            Create
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" className="posts-list-container" style={{ backgroundColor: '#9d8072', padding: '5px' , marginTop: '50px', maxHeight: '80vh', overflowY: 'auto'}}>
        <Box display="flex" flexDirection="column" alignItems="center" marginTop={2}>
          <Typography variant="h4" gutterBottom style={{ color: '#433630', fontSize: '3em', fontWeight: 'bold' }}>
            Post's List
          </Typography>
          <List style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            {posts.map((post) => (
              <Paper key={post.id} elevation={2} style={{ marginBottom: '10px', width: '95%', backgroundColor: '#715b51' }}>
                <ListItem button component={Link} to={`/posts/${post.id}`}>
                  <ListItemText
                    primary={post.title}
                    primaryTypographyProps={{
                      style: { fontSize: '1.5rem', color: '#433630', fontWeight:600 }
                    }}
                  />
                </ListItem>
              </Paper>
            ))}
          </List>
        </Box>
      </Container>
    </>
  );
}

export default PostsList;
