import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./slider.css";
import { useTheme } from "@emotion/react";
import IconSection from "./IconSection";

const mySlider = [
  { text: "Sets", link: "src/Images/sets.001.jpeg" },
  { text: "White Gold", link: "src/Images/white gold.001.jpeg" },
  { text: "Rings", link: "src/Images/rings.001.jpeg" },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Container >
      <Box sx={{ mt: 3, display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },

                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                    }}
                    variant="h6"
                  >
                    LIFESTYLE COLLECTION
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgb(290, 215, 0)",
                      fontWeight: 400,
                      my: 1,
                    }}
                    variant="h4"
                  >
                    {item.text} {/*this was MEN */}
                  </Typography>

                  <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"#fff"} mr={1} variant="h5">
                      SALE UP TO
                    </Typography>

                    <Typography color={"#D23F57"} variant="h5">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "",
                      fontWeight: 300,
                    }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#712e3f",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    shop now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.4%" } }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src/Images/small 2.001.jpeg" alt="" />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 20,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "fff",
                  fontSize: "18px",
                }}
              >
                New Arrivals
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                SUMMER
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#D24056",
                }}
              >
                SALE 20% OFF
              </Typography>

              <Link
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.3s",
                  bgcolor: "rgb(113, 45, 64, 0.7)",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src/Images/smallreplace.001.jpeg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 20,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Sundry Services
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                Gift Cards &
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                }}
              >
                Packages
              </Typography>

              <Link
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.3s",
                  bgcolor: "rgb(113, 45, 64, 0.7)",

                  "&:hover": {
                    color: "",
                  },
                }}
                href="#" //In the future make a lin to be able to visit the linked source
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <IconSection />
    </Container>
  );
};

export default Hero;
