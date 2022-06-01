import { Badge, Button, Grid, IconButton, makeStyles } from "@material-ui/core";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { IoLogOut } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { RiNotification2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./../../assets/Groupe 40.svg";
// S
const styles = makeStyles({
  overlapGroup5: {
    alignItems: "center",
    // backgroundColor: "gold",
    borderRadius: "40px",
    display: "flex",
    height: "51px",
    marginBottom: "-20px",
    marginRight: "20px",
    marginLeft: "-160px",
    width: "55px",
    padding: "4px 3px 4px 4px",
  },
  image1: {
    height: "55px",
    objectFit: "cover",
    width: "55px",
  },
  title: {
    color: "white",
    fontFamily: "cerapro-bold",
    fontSize: "1em",
    fontWeight: 550,
    letterSpacing: 0,
    // lineHeight: "31px",
    // minHeight: "10px",
    minWidth: "183px",
    whiteSpace: "nowrap",
  },
  groupe9: {
    alignItems: "center",
    backgroundColor: "#1c1312",
    borderRadius: "29px",
    display: "flex",
    height: "50px",
    justifyContent: "flex-end",
    width: "210px",
    marginLeft: "-10px",
  },
  iconLogout: {
    backgroundColor: "#1c1312",
    alignItems: "center",
    width: "55px",
    height: "51px",
    borderRadius: "39px",
    marginLeft: "8px",
    "&:hover": {
      backgroundColor: "#A9A9A9",
    },
  },

  btn: {
    backgroundColor: "gold",
    height: "50px",
    borderRadius: "39px",
    minWidth: "186px",
    paddingRight: "50px",
    justifyContent: "flex-end",
    paddingLeft: "0px",
  },
});
export default function NavBar() {
  // const auth = useAuth();
  const navigate = useNavigate();
  // const handleLogout = () => {
  //   auth.logout();
  // };
  const logoutHandler = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    await axios.get("/auth/logout", config);
    localStorage.clear();
    localStorage.removeItem("adminInfo");
    // auth.logout();
    navigate("/login");
    // window.location.reload(true);
  };
  const classes = styles();

  return (
    <AppBar style={{ backgroundColor: "white" }} elevation="0">
      <Container>
        <Toolbar>
          <div style={{ display: "flex", direction: "row", marginTop: "30px" }}>
            <div className={classes.overlapGroup5}>
              <img src={logo} className={classes.image1}></img>
            </div>
            <div className={classes.groupe9}>
              <h2 className={classes.title}>SUPER DASHBOARD</h2>
            </div>
          </div>
          <Grid item xs></Grid>

          <div
            style={{
              display: "flex",
              direction: "row",
              marginTop: "30px",
              marginRight: "-100px",
            }}
          >
            <Grid item>
              <IconButton className={classes.iconLogout}>
                <Badge color="secondary">
                  <IconContext.Provider
                    value={{ color: "white", size: "30px" }}
                  >
                    <RiNotification2Fill fontSize="small" />
                  </IconContext.Provider>
                </Badge>
              </IconButton>
              <IconButton className={classes.iconLogout}>
                <IconContext.Provider value={{ color: "white", size: "70px" }}>
                  <IoLogOut onClick={logoutHandler} />
                </IconContext.Provider>
              </IconButton>
            </Grid>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
