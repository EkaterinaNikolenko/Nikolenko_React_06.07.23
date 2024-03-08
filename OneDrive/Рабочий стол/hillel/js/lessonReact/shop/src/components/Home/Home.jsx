import React from 'react';
import './Home.css';
import Menu from './Menu/Menu';
import Content from './Content/Content';
import Grid from '@mui/material/Grid'

function Home() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={3}>
            <Menu></Menu>
        </Grid>
        <Grid item xs={9}>
            <Content/>
        </Grid>
    </Grid>
  );
}

export default Home;