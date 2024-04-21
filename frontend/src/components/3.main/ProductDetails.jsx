import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ProductDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          height={280}
          width={300}
          src="src/Images/small 2.001.jpeg"
          alt=""
        />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">WOMEN'S FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"}>
          $12.99
        </Typography>
        <Typography variant="body1">
          how to deal with this stuff by implemnting it to strapi Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Perspiciatis porro earum
          est quia quisquam ipsam nisi eos perferendis nostrum necessitatibus
        
        </Typography>
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {["src/Images/smallreplace.001.jpeg", "src/Images/dog.jpg"].map(
            (item) => {
              return (
                <img
                  style={{ borderRadius: 3 }}
                  height={100}
                  width={90}
                  key={item}
                  src={item}
                  alt=""
                />
              );
            }
          )}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
