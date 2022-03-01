import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useEffect} from "react";
import {GetNewsByBackground, GetNewsByCategory} from "../../api";
import {CardActionArea, Container, Grid} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
const getRandomNumber = (start,limit)=>Math.floor(Math.random()*(limit-start+1))+start;
export default function LabTabs() {
    const [value, setValue] = React.useState('1');
    const [count, setCount] = React.useState('https://images.pexels.com/photos/9725698/pexels-photo-9725698.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.6&h=500&sharp=20&w=2000');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [data, setData] = React.useState([]);

    const changeCategory=async (e)=>{
        const obj = await GetNewsByCategory(e);
        if (obj.success) setData(obj.data.photos);
    }

    useEffect(async () => {

        if(value==='1'){
            const obj = await GetNewsByCategory("all");
            if (obj.success) setData(obj.data.photos);
            console.log(data)
        }else if(value==='2'){
            const obj = await GetNewsByCategory("car");
            if (obj.success) setData(obj.data.photos);
            console.log(data)

        }else if(value==='3'){
            const obj = await GetNewsByCategory("city");
            if (obj.success) setData(obj.data.photos);
            console.log(data)

        }else if(value==='4'){
            const obj = await GetNewsByCategory("animals");
            if (obj.success) setData(obj.data.photos);
            console.log(data)

        }else{
            const obj = await GetNewsByCategory("forest");
            if (obj.success) setData(obj.data.photos);
            console.log(data)
        }

        const obj = await GetNewsByBackground(20,'all');
        if (obj.success) setCount(obj.data.photos[getRandomNumber(1,20)].src.original);
        console.log(obj.data)

    }, [value]);




    return (
        <>
            <Box sx={{
                backgroundPosition: "right",
                background:
                    `url(${count})`,
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
            }} paddingY={20}  margin="0 auto">
                <Typography
                    variant="h4"
                    component="h1"
                    color="white"
                    sx={{ marginBottom: "40px",width:'50%',mx:'auto' }}
                >
                    Photo by Jess Loiterton The best free stock photos, royalty free
                    images & videos shared by creators.
                </Typography>
                <Paper
                    component="form"
                    sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: "50%",
                        mx:'auto'
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search for free photos and videos"
                        inputProps={{ "aria-label": "search google maps" }}
                        onChange={(e) => changeCategory(e.target.value)}
                    />
                    <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                </Paper>
            </Box>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider',display:'flex',justifyContent: 'center'}}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="All" value="1" />
                            <Tab label="Car" value="2" />
                            <Tab label="City" value="3" />
                            <Tab label="Animals" value="4" />
                            <Tab label="Forest" value="5" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><Container>
                        <Grid container spacing={2} marginY="50px">
                            {data.map((item) => {
                                return (
                                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                                        <Card sx={{height:'400px',width:'100%'}}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    sx={{height:'400px'}}
                                                    image={item.src.original}
                                                    alt="green iguana"
                                                />
                                                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent> */}
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Container></TabPanel>
                    <TabPanel value="2"><Container>
                        <Grid container spacing={2} marginY="50px">
                            {data.map((item) => {
                                return (
                                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                                        <Card sx={{height:'400px',width:'100%'}}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    sx={{height:'400px'}}
                                                    image={item.src.original}
                                                    alt="green iguana"
                                                />
                                                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent> */}
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Container></TabPanel>
                    <TabPanel value="3"><Container>
                        <Grid container spacing={2} marginY="50px">
                            {data.map((item) => {
                                return (
                                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                                        <Card sx={{height:'400px',width:'100%'}}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    sx={{height:'400px'}}
                                                    image={item.src.original}
                                                    alt="green iguana"
                                                />
                                                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent> */}
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Container></TabPanel>
                    <TabPanel value="4"><Container>
                        <Grid container spacing={2} marginY="50px">
                            {data.map((item) => {
                                return (
                                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                                        <Card sx={{height:'400px',width:'100%'}}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    sx={{height:'400px'}}
                                                    image={item.src.original}
                                                    alt="green iguana"
                                                />
                                                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent> */}
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Container></TabPanel>
                    <TabPanel value="5"><Container>
                        <Grid container spacing={2} marginY="50px">
                            {data.map((item) => {
                                return (
                                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                                        <Card sx={{height:'400px',width:'100%'}}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    sx={{height:'400px'}}
                                                    image={item.src.original}
                                                    alt="green iguana"
                                                />
                                                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent> */}
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Container></TabPanel>
                </TabContext>
            </Box>
        </>
    );
}
