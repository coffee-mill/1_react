import { AppBar, Toolbar } from "@mui/material";
import { FC } from "react";

const TopHeader: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <h2>Test site</h2>
      </Toolbar>
    </AppBar>
  );
};

export default TopHeader;
