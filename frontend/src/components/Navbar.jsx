import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar position="sticky" margin="10px">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            News App
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
