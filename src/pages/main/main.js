import { Button, Container, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'
import "./main.css";
export class main extends Component {
    render() {
        return (
            <Box sx={{flexGrow:1}}>
            <Grid container className='mainRight'>
                <Grid item xs={12} sm={12} md={12} lg={12} className="coverItems">
                    <TextField className="mainSearch" placeholder="Search" />
                    <Button variant="contained" style={{backgroundColor:'firebrick', padding:16}}>
                        search
                    </Button>
                    <Container >
                    <h1>Coursaty</h1>
                    <h2>
                    get latest update course
                    </h2>
                    <h3>
                     Online course supports direct access via your 
                     university credentials for institutions participating 
                     in many Shibboleth federations or OpenAthens
                    </h3>
                    </Container>
                </Grid>
            </Grid>                  
    </Box>
        )
    }
}

export default main
