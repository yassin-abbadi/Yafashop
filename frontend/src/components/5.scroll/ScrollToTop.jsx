import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollToTop = () => {
  return (
    <div>
      <Zoom in={useScrollTrigger({ threshold: 100 })}>
        <Fab
          onClick={() => {
            window.scroll(0, 0);
          }}
          variant="extended"
          size="small"
          sx={{ position: "fixed", bottom: 33, right: 33 }}
          color="primary"
          aria-label="add"
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Zoom>
    </div>
  );
};

export default ScrollToTop;
