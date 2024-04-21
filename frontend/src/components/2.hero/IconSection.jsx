useTheme;
import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const IconSection = () => {
  const theme = useTheme()
  return (
    <Container sx={{ mt: 3, bgcolor: theme.palette.mode === "dark"? "#000" : "#fff"}}>
      <Stack
        divider={useMediaQuery('(min-width:600px') ?  <Divider orientation="vertical" flexItem /> : null}
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
      >
        <MyBox
          icon={<ElectricBolt />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined />}
          title={"Money Gurantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmOutlined />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyBox
          icon={<CreditScoreOutlined />}
          title={"Payment"}
          subTitle={"Secure System"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
       
        py: 1.6,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left", 
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1"> {title} </Typography>

        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
