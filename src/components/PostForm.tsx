// src/components/PostForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    AppBar, Toolbar, Typography, Container, IconButton, TextField, Button, Box
} from '@mui/material';
import { HomeOutlined as HouseIcon, AddCircleOutline as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      primary:{
        main: '#433630',
      },
    }
  });

const PostForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const history = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://34.199.239.94:8000/api/posts/', {
                title,
                content,
                author
            });
            console.log('Post created:', response.data);
            // Redirigir a la vista de detalles del nuevo post
            history(`/posts/${response.data.id}`);  // Navegamos a la vista del nuevo post
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
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
            <Container maxWidth="sm" className="posts-list-container" style={{ backgroundColor: '#9d8072', padding: '15px' }}>
                <Box display="flex" flexDirection="column" alignItems="center" marginTop={2}>
                    <Typography variant="h4" gutterBottom style={{ color: '#433630', fontSize: '3em', fontWeight: 'bold' }}>
                        Create Post
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Title"
                            variant="outlined"
                            fullWidth
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            margin="normal"
                            InputLabelProps={{
                                style: { fontSize: '1.1rem' } // Establecer tamaño de fuente del label
                            }}
                        />
                        <TextField
                            label="Content"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            margin="normal"
                            InputLabelProps={{
                                style: { fontSize: '1.1rem' } // Establecer tamaño de fuente del label
                            }}
                        />
                        <TextField
                            label="Author"
                            variant="outlined"
                            fullWidth
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                            margin="normal"
                            InputLabelProps={{
                                style: { fontSize: '1.1rem'},
                            }}
                        />
                        <Button type="submit" variant="contained" style={{ background: '#433630', color: '#9d8072', fontWeight: 'bolder', marginTop:'10px'}}>
                            Create
                        </Button>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default PostForm;
