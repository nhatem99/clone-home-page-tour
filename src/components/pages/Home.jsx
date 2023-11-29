import React from "react";
import Header from "../header/Header";
import Banner from "../banner/Banner";
import TitleCat from "../banner/TitleCat";
import CardWrap from "../card/CardWrap";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { popularDestination, trips, why_choose, tips } from "../../apis/data";
import Footer from "../footer/Footer";
import MobileNav from "../navBar/MobileNav";
import ButtonScrollToTop from "../button/ButtonScrollToTop";

const Home = () => {
  const formatter = new Intl.NumberFormat("en-IN", 3);
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <MobileNav></MobileNav>
      <ButtonScrollToTop></ButtonScrollToTop>
      <TitleCat
        title="Popular Destinations"
        description="World best tourist destinations"
      ></TitleCat>
      <Box className="card_destination" sx={{ margin: "50px 0px" }}>
        <Box xs={{ flexGrow: 1 }} className="standard_wrapper">
          <Grid container spacing={3}>
            {popularDestination.length > 0
              ? popularDestination.map((item, index) => (
                  <Grid item mobile={12} tablet={3} key={index}>
                    <CardWrap mediaClass="card_img" media={item.image_src}>
                      <a className="tour_link" href={item.url}></a>
                      <div className="portfolio_info_wrapper">
                        <h3>{item.name}</h3>
                      </div>
                    </CardWrap>
                  </Grid>
                ))
              : ""}
          </Grid>
        </Box>
      </Box>
      <TitleCat
        title="Best Value Trips"
        description="Best offers trips from us"
      ></TitleCat>
      <Box className="card_value_trip" sx={{ margin: "50px 0px" }}>
        <Box xs={{ flexGrow: 1 }} className="standard_wrapper">
          <Grid container spacing={3}>
            {trips.length > 0
              ? trips.map((item, index) => (
                  <Grid item mobile={12} tablet={4} key={index}>
                    <CardWrap mediaClass="card_img" media={item.image_src}>
                      <CardContent>
                        <span className="tour_price ">
                          <span>${formatter.format(item.price)}</span>
                        </span>
                        <Typography
                          gutterBottom
                          variant="h1"
                          sx={{ fontSize: "20px", fontWeight: "bold" }}
                          component="div"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ padding: "0.1em 0 1.3em 0" }}
                        >
                          {item.city}
                        </Typography>
                        <Rating
                          readOnly
                          name="size-small"
                          size="small"
                          defaultValue={item.rate}
                          style={{ color: "#1EC6B6" }}
                        />
                        <a className="tour_link" href={item.url}></a>
                      </CardContent>
                    </CardWrap>
                  </Grid>
                ))
              : ""}
          </Grid>
        </Box>
      </Box>
      <TitleCat
        title="Why Choose Us"
        description="Here are reasons you should plan trip with us"
      ></TitleCat>
      <Box className="card_why_choose" sx={{ margin: "50px 0px 70px 0px" }}>
        <Box xs={{ flexGrow: 1 }} className="standard_wrapper">
          <Grid container spacing={3}>
            {why_choose.length > 0
              ? why_choose.map((item, index) => (
                  <Grid item mobile={12} tablet={4} key={index}>
                    <CardWrap mediaClass="card_img" media={item.image_src}>
                      <div className="portfolio_info_wrapper">
                        <Typography
                          gutterBottom
                          variant="h1"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            padding: "1.3em 0 0.3em 0",
                          }}
                          component="div"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ padding: "0.1em 0 1.3em 0" }}
                        >
                          {item.des}
                        </Typography>
                      </div>
                    </CardWrap>
                  </Grid>
                ))
              : ""}
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          height: "60vh",
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          backgroundImage:
            "url('https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg')",
        }}
      ></Box>
      <TitleCat
        title="Articles & Tips"
        description="Explore some of the best tips from around the world"
      ></TitleCat>
      <Box className="card_tip" sx={{ margin: "50px 0px 70px 0px" }}>
        <Box xs={{ flexGrow: 1 }} className="standard_wrapper">
          <Grid container spacing={3}>
            {tips.length > 0
              ? tips.map((item, index) => (
                  <Grid item mobile={12} tablet={4} key={index}>
                    <CardWrap mediaClass="card_img" media={item.image_src}>
                      <CardContent>
                        <Typography
                          variant="body2"
                          sx={{
                            padding: "0.1em 0 1em 0",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                          }}
                        >
                          {item.date}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h1"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            lineHeight: "1.3em",
                          }}
                          component="div"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ padding: "1.3em 0 1.3em 0" }}
                        >
                          {item.des}
                        </Typography>
                        <CardActions>
                          {/* <Button size="small">Learn More</Button> */}
                          <a href={item.url}>Read More</a>
                        </CardActions>
                      </CardContent>
                    </CardWrap>
                  </Grid>
                ))
              : ""}
          </Grid>
        </Box>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Home;
