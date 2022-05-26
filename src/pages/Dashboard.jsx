import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Paper, makeStyles } from "@material-ui/core";
import { UserOutlined } from "@ant-design/icons";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material";
import { BiCreditCard } from "react-icons/bi";
import StatusCard from "../components/status-cards/StatusCard";
const styles = makeStyles((theme) => ({
  h4: {
    fontFamily: "cerapro-bold",
    marginTop: "-80px",
    marginRight: "100px",
    color: "#560a02",
    fontSize: "2rem",
  },
  icon: {
    fontSize: "2.5rem",
    marginLeft: "-35px",
    marginBottom: "-40px",
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: "0.97rem",
    marginRight: "-40px",
  },
}));
function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(7.5),
    textAlign: "center",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: "15px",
    color: theme.palette.text.secondary,
    height: "10px",
    width: "80px",
  }));

  const classes = styles();
  const [totalQuizmasters, setTotalQuizmasters] = useState();
  const config = {
    headers: {
      "Content-type": "Application/json",
    },
  };

  const totalUsers = async () => {
    try {
      const result = await axios.get(
        "http://localhost:5000/admin/getUsers",
        config
      );
      setTotalQuizmasters(result.data.length);

      // console.log(result.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      totalUsers();
    },
    [],
    [totalQuizmasters]
  );
  return (
    <div className="outletForm">
      {/*<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ md: 4 }} style={{ marginLeft: "-680px" }}>
          <Grid item xs={6}>
            <Item>
              <UserOutlined className={classes.icon} />
              <h4 className={classes.h4}>{totalQuizmasters}</h4>
              <span className={classes.title}>Total Users</span>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <BiCreditCard className={classes.icon} />
              <h4 className={classes.h4}>{totalQuizmasters}</h4>
              <span className={classes.title}>Payment</span>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item> xs=8</Item>
          </Grid>
          <Grid item xs={6}>
            <Item> xs=8</Item>
          </Grid>
        </Grid>
  </Box>*/}
    </div>
  );
}

export default Dashboard;
