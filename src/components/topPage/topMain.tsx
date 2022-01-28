import { createStyles, makeStyles } from "@mui/styles";
import { InputBase, Paper, IconButton } from "@mui/material";
import { FC, useState } from "react";
import back from "../../assets/img/back.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${back})`,
      backgroundSize: "cover",
      height: "100vh",
      backgroundPosition: "center"
    },
    paper: {
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
      top: "33%",
      width: "30%",
      display: "flex",
      justifyContent: "center"
    },
    base: {
      width: "100%"
    }
  })
);

const TopMain: FC = () => {
  const classes = useStyle();
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/search/" + keyword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <div className={classes.background}>
      <Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
        <IconButton onClick={handleSubmit}>
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.base}
          placeholder="Search"
          onChange={handleChange}
        />
      </Paper>
    </div>
  );
};

export default TopMain;
