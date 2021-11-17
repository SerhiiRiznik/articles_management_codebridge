import React, { ChangeEvent } from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import { setSearch } from "./state/appSlice";
const Header = () => {
  const search = useSelector((state: RootState) => state.app.search);
  const dispatch = useDispatch();
  const HandleChange = (event: ChangeEvent<HTMLInputElement>) => dispatch(setSearch(event.target.value));
  
  return (
    <AppBar position="static" color="transparent">
      <Paper elevation={0} className="app_title">
        Filter by keywords:{" "}
      </Paper>
      <TextField
        value={search}
        onChange={HandleChange}
        variant="outlined"
        className="app_search"
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </AppBar>
  );
};

export default Header;
