// src/components/PostDetails.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, IconButton, Container,
} from '@mui/material';
import { HomeOutlined as HouseIcon, AddCircleOutline as AddIcon } from '@mui/icons-material';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
}

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/posts/${id}/`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post details:', error);
      });
  }, [id]);

  if (!post) {
    return (
      <Container style={{ backgroundColor: '#9d8072', padding: '5px' }}>
        <AppBar position="fixed" style={{ backgroundColor: '#5f4d45' }}>
          <Toolbar>
            <IconButton edge="start" style={{ color: '#9d8072' }} aria-label="home">
              <HouseIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: '#9d8072', fontSize: '2em', fontWeight: 'bold' }}>
              Home
            </Typography>
            <IconButton color="inherit" component={Link} to="/posts/create" style={{ textDecoration: 'none', color: '#9d8072' }}>
              <AddIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" component={Link} to="/posts/create" style={{ textDecoration: 'none', color: '#9d8072', fontSize: '2em', fontWeight: 'bold' }}>
              Create
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm" style={{ backgroundColor: '#9d8072', padding: '10px' }}>
          <Typography style={{ color: '#433630', fontSize: '3em', fontWeight: 'bold', textAlign: 'center'}}>No se ha encontrado un blog con esta id :(</Typography>
        </Container>
      </Container>
    );
  }

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: '#5f4d45' }}>
        <Toolbar>
          <IconButton edge="start" style={{ color: '#9d8072' }} aria-label="home">
            <HouseIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: '#9d8072', fontSize: '2em', fontWeight: 'bold' }}>
            Home
          </Typography>
          <IconButton color="inherit" component={Link} to="/posts/create" style={{ textDecoration: 'none', color: '#9d8072' }}>
            <AddIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" component={Link} to="/posts/create" style={{ textDecoration: 'none', color: '#9d8072', fontSize: '2em', fontWeight: 'bold' }}>
            Create
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ backgroundColor: '#9d8072', padding: '10px', marginTop: '70px' }}>
        <Typography style={{ color: '#433630', fontSize: '3em', fontWeight: 'bold', textAlign: 'center'}}>{post.title}</Typography>
        <Typography style={{ color: '#433630', fontSize: '1.5em' }}><span style={{fontWeight:'bold'}}>Id:</span> {post.id}</Typography>
        <Typography style={{ color: '#433630', fontSize: '1.5em' }}><span style={{fontWeight:'bold'}}>Content:</span> {post.content}</Typography>
        <Typography style={{ color: '#433630', fontSize: '1.5em' }}><span style={{fontWeight:'bold'}}>Author:</span> {post.author}</Typography>
        <Typography style={{ color: '#433630', fontSize: '1.5em' }}><span style={{fontWeight:'bold'}}>Created:</span> {post.created_at}</Typography>
      </Container>
    </>
  );
}

export default PostDetails;
