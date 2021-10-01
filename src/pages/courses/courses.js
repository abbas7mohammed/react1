import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Switch, Divider, Chip, Grid, Container } from '@mui/material';
import { Box } from '@mui/system';





function Courses({setCount}) {

    const path = 'data/data.json';

    const[courseDetail,setCourseDetail] = useState("");

  const [courses, setCourse] = useState([]);



  useEffect(() => {
      axios.get(path).then(res=>{
        setCourse(res.data)
      })
  })



  return (
          <Container sx={{padding:3}}>
              <Grid container spacing={5}>
              {
              courses.map(course=>(
                <Grid item xs={12} sm={6} md={4} lg={3}>

                <Card sx={{ maxWidth: 250 }} key={course.id} sx={{justifyContent:'center'}}>
                    <CardActionArea>             
                       <CardMedia
                            component="img"
                            height="210"
                            image={course.img}
                            alt={course.title}
                            />
                        <CardContent key={course.id}>
                            <Typography gutterBottom variant="h5" component="div">
                                {course.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {course.category}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button 
                        size="small"
                        onClick={()=>{
                            setCourseDetail(course)
                        }}
                        >
                            Detail
                        </Button>

                    </CardActions>
                </Card>
                </Grid>

              ))
              
          }
          <Grid item xs={12} sm={12} md={12} lg={12}>
          <Divider>
              <Chip label='Detail'></Chip>
          </Divider>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
              <img src={courseDetail.img} alt={courseDetail.title} style={{width:70,height:70}}/>
              <Typography>
                  Course Id : {courseDetail.id}
              </Typography>
              <Typography>
                  Course Name : {courseDetail.title}
              </Typography>
              <Typography>
                  Course Category : {courseDetail.category}
              </Typography>

              </Grid>
          </Grid>    
          </Container>
        );
}


export default Courses;
